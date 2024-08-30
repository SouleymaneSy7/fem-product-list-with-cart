const Carts = () => {
  const cartQuantity = 0;
  return (
    <section className="cart-container">
      <h2>Your Cart ({cartQuantity}) </h2>

      <div>
        <img src="/src/assets/images/illustration-empty-cart.svg" alt="" />

        <p>Your added items will appear here</p>
      </div>
    </section>
  );
};

export default Carts;
