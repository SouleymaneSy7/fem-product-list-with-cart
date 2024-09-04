import React from "react";
import { createPortal } from "react-dom";

import { formatNumber } from "@/utils/currencyFormat";
import { OrderConfirmedIcon } from "./icons/Icons.component";

import Button from "./Buttons";
import useCartStore from "@/store/productStore";
import ConfirmModalItems from "./ConfirmModalItems";

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
                <OrderConfirmedIcon />
              </div>

              <h2 className="confirm__title">Order Confirmed</h2>

              <p className="confirm__text">We hope you enjoy your food!</p>

              <div className="confirm__cart-item-container">
                {cartData.map((item) => (
                  <ConfirmModalItems key={item.id} item={item} />
                ))}

                <div className="confirm__cart-item__order">
                  <p>Order Total</p>
                  <strong> {formatNumber(totalPrice)} </strong>
                </div>
              </div>

              <Button
                className="confirm__cart-item--btn"
                onClick={() => {
                  closeModal();
                }}
              >
                Start New Order
              </Button>
            </div>
          </div>,
          confirmModalDOM!
        )}
    </React.Fragment>
  );
};

export default ConfirmModal;
