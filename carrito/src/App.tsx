import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import { Product } from './types/product';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <main>
      <ProductForm products={products} handleCreateProduct={setProducts} />
      <ProductList products={products} />
    </main>
  )
}

export default App
