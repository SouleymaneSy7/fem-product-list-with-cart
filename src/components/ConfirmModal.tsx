import React from "react";
import confirmIcon from "@/assets/images/icon-order-confirmed.svg";
import { formatNumber } from "@/utils/currencyFormat";
import { createPortal } from "react-dom";
import useCartStore from "@/store/productStore";

const confirmModalDOM = document.querySelector("#confirm-modal-root");

type ModalPropsType = {
  showModal: boolean;
  closeModal: () => void;
  totalPrice: number;
};

type ConfirmModalPropsType = {
  cartData: {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    cartQuantity: number;
  }[];
} & ModalPropsType;

const ConfirmModal = ({
  cartData,
  showModal,
  closeModal,
  totalPrice,
}: ConfirmModalPropsType) => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <React.Fragment>
      {showModal &&
        cartItems.length > 0 &&
        createPortal(
          <div className="confirm-modal-container">
            <div className="confirm">
              <div className="confirm__img">
                <img src={confirmIcon} alt="Confirm Icon SVG" />
              </div>

              <h2 className="confirm__title">Order Confirmed</h2>

              <p className="confirm__text">We hope you enjoy your food!</p>

              <div className="confirm__cart-item-container">
                {cartData.map((item) => (
                  <div className="confirm__cart-item__flex" key={item.id}>
                    <div className="confirm__cart-item">
                      <img
                        className="confirm__cart-item__img"
                        src={item.image}
                        alt={`${item.name} food image`}
                      />
                      <div className="confirm__cart-item__information">
                        <h3 className="confirm__cart-item__information__name">
                          {item.name}
                        </h3>

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
                ))}

                <div className="confirm__cart-item__order">
                  <p>Order Total</p>
                  <strong> {formatNumber(totalPrice)} </strong>
                </div>
              </div>

              <button
                type="button"
                className="confirm__cart-item--btn"
                onClick={() => {
                  closeModal();
                }}
              >
                Start New Order
              </button>
            </div>
          </div>,
          confirmModalDOM!
        )}
    </React.Fragment>
  );
};

export default ConfirmModal;
