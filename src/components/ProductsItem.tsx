import { formatNumber } from "@/utils/currencyFormat";

type ProductsItemPropsType = {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
};

const ProductsItem = ({
  // id,
  image,
  name,
  category,
  price,
}: ProductsItemPropsType) => {
  const count = 11;

  return (
    <div className="product__card">
      <div className="product__card__top">
        <img className="card__img" src={image} alt={`${name} food image`} />

        {count >= 1 ? (
          <div className="card__btn__flex">
            <button type="button" className="card--btn--minus">
              -
            </button>
            <p className="card--price">{count}</p>
            <button type="button" className="card--btn--plus">
              +
            </button>
          </div>
        ) : (
          <button type="button" className="card--btn--add-to">
            add to the cart
          </button>
        )}
      </div>

      <div className="product__card__bottom">
        <p className="card__category">{category}</p>
        <h2 className="card__name">{name}</h2>
        <p className="card__price">{formatNumber(price)}</p>
      </div>
    </div>
  );
};

export default ProductsItem;
