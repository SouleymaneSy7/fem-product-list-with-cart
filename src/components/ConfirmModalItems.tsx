import { formatNumber } from "@/utils/currencyFormat";

type confirmItemsPropsType = {
  item: {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    cartQuantity: number;
  };
};

const ConfirmModalItems = ({ item }: confirmItemsPropsType) => {
  return (
    <div className="confirm__cart-item__flex">
      <div className="confirm__cart-item">
        <img
          className="confirm__cart-item__img"
          src={item.image}
          alt={`${item.name} food image`}
        />
        
        <div className="confirm__cart-item__information">
          <h3 className="confirm__cart-item__information__name">{item.name}</h3>

          <div className="confirm__cart-item__information__flex">
            <p className="confirm__cart-item__information__quantity">
              {item.cartQuantity}x
            </p>
            <p className="confirm__cart-item__information__total-price">
              @ {formatNumber(item.price)}
            </p>
          </div>
        </div>
      </div>

      <div className="confirm__cart-item--price">
        <p>{formatNumber(item.price * item.cartQuantity)}</p>
      </div>
    </div>
  );
};

export default ConfirmModalItems;
