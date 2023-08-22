import { useContext } from "react"
import { ProductsContext } from "./context"

function App() {
  const { products } = useContext(ProductsContext)
  return (
    <>
      {
        products.map((product) => (
          <div key={product.id}>
            {product.title}
          </div>
        ))
      }
    </>
  )
}

export default App
