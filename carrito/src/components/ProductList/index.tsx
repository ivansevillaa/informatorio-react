import { useState } from "react";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css";
import { Product } from "../../types/product";

interface Props {
  products: Product[]
}

function ProductList({ products }: Props) {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddProductToCart = (price: number) => {
    setTotalPrice(totalPrice + price);
  }

  const handleRemoveProductToCart = (price: number) => {
    setTotalPrice(totalPrice - price);
  }

  return (
    <section>
      <div className={styles.header}>
        <h2>Listado</h2>
        <div className={styles.cartContainer}>
          <p>🛒</p>
          <p>{totalPrice}</p>
        </div>
      </div>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.name + product.price}
            handleAddProductToCart={handleAddProductToCart}
            handleRemoveProductToCart={handleRemoveProductToCart}
            product={product}
          />
        )
      })}
    </section>
  )
}

export default ProductList;
