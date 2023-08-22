import { useContext } from "react"
import { ProductsContext } from "./context"
import "./sass/main.scss";
import { Card } from "./components/Card";

function App() {
  const { products } = useContext(ProductsContext)
  return (
    <section className="product">
      <div className="container">
        <div className="grid">
          {
            products.map((product) => (
              <Card key={product.id} title={product.title} image={product.image} description={product.description} price={product.price} rating={product.rating} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default App
