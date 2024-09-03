import useCartStore from "@/store/productStore";
import cartIcon from "@/assets/images/icon-add-to-cart.svg";
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
          <button
            type="button"
            className="card--btn--add-to"
            onClick={() => {
              addCartItem(product);
            }}
          >
            <img src={cartIcon} alt="Cart Icon SVG" />
            Add to the Cart
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </button>
            <p className="card--price">{cartQuantity}</p>
            <button
              type="button"
              className="card--btn--plus"
              onClick={() => {
                increaseCartQuantity(product.id);
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
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
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
