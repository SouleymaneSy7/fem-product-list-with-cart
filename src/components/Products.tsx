import productData from "@/data/productData.json";
import ProductsItem from "./ProductsItem";

const Products = () => {
  return (
    <section className="product-container">
      <h1 className="product__title">Desserts</h1>

      <div className="product__flex">
        {productData.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
