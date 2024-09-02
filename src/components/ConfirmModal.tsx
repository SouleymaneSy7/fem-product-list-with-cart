import React from "react";
import confirmIcon from "@/assets/images/icon-order-confirmed.svg";
import { formatNumber } from "@/utils/currencyFormat";
import { createPortal } from "react-dom";

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
  return (
    <React.Fragment>
      {showModal &&
        createPortal(
          <div className="confirm-modal-container">
            <div className="confirm">
              <div>
                <img src={confirmIcon} alt="Confirm Icon SVG" />
              </div>

              <h2 className="confirm__title">Order Confirmed</h2>

              <p className="confirm__text">We hope you enjoy your food!</p>

              <div className="confirm__cart-item-container">
                {cartData.map((item) => (
                  <div key={item.id}>
                    <div>
                      <img src={item.image} alt={`${item.name} food image`} />
                      <div>
                        <h3>{item.name}</h3>
                        <div>
                          <p>{item.cartQuantity}x</p>
                          <p>{formatNumber(item.price * item.cartQuantity)}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p>{formatNumber(item.price)}</p>
                    </div>
                  </div>
                ))}

                <div>
                  <p>Order Total</p>
                  <strong> {formatNumber(totalPrice)} </strong>
                </div>
              </div>

              <button
                type="button"
                className="confirm--btn"
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
