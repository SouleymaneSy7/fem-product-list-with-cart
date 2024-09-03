import useCartStore from "@/store/productStore";
import { formatNumber } from "../utils/currencyFormat";

type cartDataPropsType = {
  cartData: {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    cartQuantity: number;
  };
};

const CartsItem = ({ cartData }: cartDataPropsType) => {
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const totalPrice = cartData.price * cartData.cartQuantity;

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <h3 className="cart-item__title">{cartData.name}</h3>

        <div className="cart-item__flex">
          <p className="cart-item--quantity">{cartData.cartQuantity}x</p>
          <p className="cart-item__price">@ {formatNumber(cartData.price)}</p>
          <p className="cart-item--total-price">{formatNumber(totalPrice)}</p>
        </div>
      </div>
      <div className="cart-item__right">
        <button
          type="button"
          className="cart-item--btn"
          onClick={() => {
            removeCartItem(cartData.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartsItem;
