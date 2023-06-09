import { FormEvent, useState } from "react";
import Input from "../Input";
import { Product } from "../../types/product";

interface Props {
  products: Product[];
  handleCreateProduct: (products: Product[]) => void;
}

function ProductForm({ products, handleCreateProduct }: Props) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (productName && price) {
      handleCreateProduct([...products, {
        name: productName,
        description,
        price
      }])
      setProductName("")
      setDescription("")
      setPrice("")
    } else {
      alert("Falta data")
    }
  }

  return (
    <section>
      <h2>Cargar Producto</h2>
      <form onSubmit={handleSubmit}>
        <Input
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          id="name"
          label="Nombre del producto"
        />
        <Input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          id="description"
          label="Descripcion (Opcional)"
        />
        <Input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          id="price"
          label="Precio"
        />
        <button type="submit">Agregar</button>
      </form>
    </section>
  )
}

export default ProductForm;
