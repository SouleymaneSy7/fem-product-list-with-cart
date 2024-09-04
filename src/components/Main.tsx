import React from "react";
import Carts from "./Carts";
import Products from "./Products";

const Main = () => {
  const mainRef = React.useRef<HTMLElement>(null);

  return (
    <main className="main" ref={mainRef}>
      <Products />
      <Carts forwardedRef={mainRef} />
    </main>
  );
};

export default Main;
