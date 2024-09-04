import Button from "./Buttons";
import useCartStore from "@/store/productStore";

import { formatNumber } from "@/utils/currencyFormat";
import {
  AddToCartIcon,
  DecrementIcon,
  IncrementIcon,
} from "./icons/Icons.component";

type ProductsItemPropsType = {
  product: {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
  };
};

const ProductsItem = ({ product }: ProductsItemPropsType) => {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const cartQuantity = useCartStore((state) => state.getCartItem(product.id));
  const increaseCartQuantity = useCartStore((state) => state.increaseCartItem);
  const decreaseCartQuantity = useCartStore((state) => state.decreaseCartItem);

  return (
    <div
      className={cartQuantity > 0 ? "product__card active" : "product__card"}
    >
      <div className="product__card__top">
        <img
          className="card__img"
          src={product.image}
          alt={`${product.name} food image`}
        />

        {cartQuantity === 0 ? (
          <Button
            className="card--btn--add-to"
            onClick={() => {
              addCartItem(product);
            }}
          >
            <AddToCartIcon />
            Add to the Cart
          </Button>
        ) : (
          <div className="card__btn__flex">
            <Button
              className="card--btn--minus"
              onClick={() => {
                decreaseCartQuantity(product.id);
              }}
            >
              <DecrementIcon />
            </Button>

            <p className="card--price">{cartQuantity}</p>

            <Button
              className="card--btn--plus"
              onClick={() => {
                increaseCartQuantity(product.id);
              }}
            >
              <IncrementIcon />
            </Button>
          </div>
        )}
      </div>

      <div className="product__card__bottom">
        <p className="card__category">{product.category}</p>
        <h2 className="card__name">{product.name}</h2>
        <p className="card__price">{formatNumber(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductsItem;
