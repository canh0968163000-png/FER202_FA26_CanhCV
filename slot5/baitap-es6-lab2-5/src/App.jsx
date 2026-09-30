import ProductList from './components/ProductList.jsx'
import { products } from './data/products.js'

function App() {
  return (
    <div className="container my-4">
      <ProductList products={products} />
    </div>
  )
}

export default App
