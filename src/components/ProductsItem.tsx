import useCartStore from "@/store/productStore";
import { formatNumber } from "@/utils/currencyFormat";

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
    <div className="product__card">
      <div className="product__card__top">
        <img
          className="card__img"
          src={product.image}
          alt={`${product.name} food image`}
        />

        {cartQuantity === 0 ? (
          <button
            type="button"
            className="card--btn--add-to"
            onClick={() => {
              addCartItem(product);
            }}
          >
            add to the cart
          </button>
        ) : (
          <div className="card__btn__flex">
            <button
              type="button"
              className="card--btn--minus"
              onClick={() => {
                decreaseCartQuantity(product.id);
              }}
            >
              -
            </button>
            <p className="card--price">{cartQuantity}</p>
            <button
              type="button"
              className="card--btn--plus"
              onClick={() => {
                increaseCartQuantity(product.id);
              }}
            >
              +
            </button>
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
