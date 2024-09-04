import Button from "./Buttons";
import useCartStore from "@/store/productStore";
import { formatNumber } from "../utils/currencyFormat";
import { RemoveItemIcon } from "./icons/Icons.component";

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
        <Button
          className="cart-item--btn"
          onClick={() => {
            removeCartItem(cartData.id);
          }}
        >
          <RemoveItemIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartsItem;
