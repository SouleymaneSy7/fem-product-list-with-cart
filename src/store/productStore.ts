import { create } from "zustand";

type ProductsType = {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
};

type cartItemsType = ProductsType & {
  id?: number;
  cartQuantity?: number;
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
}));

export default useCartStore;
