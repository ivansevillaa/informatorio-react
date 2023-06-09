import { useState } from "react";
import styles from './styles.module.css';
import { Product } from "../../types/product";

interface Props {
  product: Product;
  handleAddProductToCart: (price: number) => void;
  handleRemoveProductToCart: (price: number) => void;
}

function ProductCard({
  product,
  handleAddProductToCart,
  handleRemoveProductToCart
}: Props) {
  const [quantity, setQuantity] = useState(0)

  const handleRemove = () => {
    setQuantity(quantity - 1)
    handleRemoveProductToCart(Number(product.price))
  }

  const handleAdd = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1)
      handleAddProductToCart(Number(product.price))
    } else {
      alert("⚠️ Solo se pueden llevar 10 productos!!!!!!")
    }
  }

  return (
    <article className={styles.container}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className={styles.buttonContainer}>
        <button type="button" onClick={handleRemove} disabled={quantity === 0}>-</button>
        <p>{quantity}</p>
        <button type="button" onClick={handleAdd}>+</button>
      </div>
    </article>
  )
}

export default ProductCard;
