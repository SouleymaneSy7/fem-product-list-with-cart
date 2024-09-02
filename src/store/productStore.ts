import { create } from "zustand";

type ProductsType = {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
};

type cartItemsType = ProductsType & {
  id: number;
  cartQuantity: number;
};

type StateType = {
  cartItems: cartItemsType[];
};

type ActionsType = {
  addCartItem: (product: ProductsType) => void;
  getCartItem: (id: number) => number;
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  resetCartItem: () => void;
};

const initialState: StateType = {
  cartItems: [],
};

const useCartStore = create<StateType & ActionsType>()((set, get) => ({
  ...initialState,

  addCartItem: (product) => {
    const findCartItem = get().cartItems.find((item) => item.id === product.id);

    if (findCartItem) {
      if (typeof findCartItem.cartQuantity === "number") {
        findCartItem.cartQuantity++;
      }

      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...product, cartQuantity: 1 }] });
    }
  },

  getCartItem: (id) => {
    return get().cartItems.find((item) => item.id === id)?.cartQuantity || 0;
  },

  increaseCartItem: (id: number) => {
    const findCartItem = get().cartItems.find((item) => item.id === id);

    if (findCartItem) {
      if (typeof findCartItem.cartQuantity === "number") {
        findCartItem.cartQuantity++;
      }

      set({ cartItems: [...get().cartItems] });
    }
  },

  decreaseCartItem: (id: number) => {
    const findCartItem = get().cartItems.find((item) => item.id === id);

    if (findCartItem) {
      if (typeof findCartItem.cartQuantity === "number") {
        if (findCartItem.cartQuantity === 1) {
          const deletedCartItems = get().cartItems.filter(
            (item) => item.id !== id
          );

          set({ cartItems: deletedCartItems });
        } else {
          findCartItem.cartQuantity--;
          set({ cartItems: [...get().cartItems] });
        }
      }
    }
  },

  removeCartItem: (id: number) => {
    const findCartItem = get().cartItems.find((item) => item.id === id);

    if (findCartItem) {
      if (typeof findCartItem.cartQuantity === "number") {
        const deletedCartItems = get().cartItems.filter(
          (item) => item.id !== id
        );

        set({ cartItems: deletedCartItems });
      }
    }
  },

  resetCartItem: () => {
    set(initialState);
  },
}));

export default useCartStore;
