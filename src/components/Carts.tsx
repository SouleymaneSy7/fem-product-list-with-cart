import useCartStore from "@/store/productStore";
import CartsItem from "./CartsItem";
import { formatNumber } from "@/utils/currencyFormat";
import React from "react";
import ConfirmModal from "./ConfirmModal";
import productData from "@/data/productData.json";

const Carts = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const resetCartItem = useCartStore((state) => state.resetCartItem);

  const showConfirmModal = () => {
    setIsOpen(true);
  };

  const closeConfirmModal = () => {
    resetCartItem();
    setIsOpen(false);
  };

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.cartQuantity + quantity,
    0
  );

  const totalPrice = cartItems.reduce((totalPrice, cartItem) => {
    const findItem = productData.find((item) => item.id === cartItem.id);
    return totalPrice + (findItem?.price || 0) * cartItem.cartQuantity;
  }, 0);

  return (
    <React.Fragment>
      <div>
        {cartItems.length > 0 ? (
          <section className="cart">
            <h2 className="cart__title">Your Cart ({cartQuantity})</h2>

            <div className="cart--item">
              {cartItems.map((cart) => (
                <CartsItem key={cart.id} cartData={cart} />
              ))}
            </div>

            <div className="cart__flex">
              <p className="cart__order-total">Order Total</p>

              <h3 className="cart--total-price">{formatNumber(totalPrice)}</h3>
            </div>

            <div className="cart__information">
              <div>
                <img
                  src="../assets/images/icon-carbon-neutral.svg"
                  alt="Carbon Neutral Icon"
                />
              </div>

              <p>
                This is a <strong>carbon-neutral</strong> delivery
              </p>
            </div>

            <button
              type="button"
              className="cart--confirm-btn"
              onClick={() => {
                showConfirmModal();
              }}
            >
              Confirm Order
            </button>
          </section>
        ) : (
          <section className="cart">
            <h2 className="cart__title">Your Cart: ({cartItems.length}) </h2>

            <div className="cart__empty-img">
              <img
                src="/src/assets/images/illustration-empty-cart.svg"
                alt="Empty Cart Illustration"
              />

              <p>Your added items will appear here</p>
            </div>
          </section>
        )}
      </div>

      <ConfirmModal
        cartData={cartItems}
        showModal={isOpen}
        closeModal={closeConfirmModal}
        totalPrice={totalPrice}
      />
    </React.Fragment>
  );
};

export default Carts;
