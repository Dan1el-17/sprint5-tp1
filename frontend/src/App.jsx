import { useContext } from "react"
import { ProductsContext } from "./context"
import StarRatings from "react-star-ratings";
import "./sass/main.scss";

function App() {
  const { products } = useContext(ProductsContext)
  return (
    <section className="product">
      <div className="container">
        <div className="grid">
          {
            products.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} className="card-image" />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title}
                  </h5>
                  <p className="card-description">
                    {product.description.slice(0, 50)}...
                  </p>
                  <p className="card-price">${product.price}</p>
                  <div className="card-detail">
                    <StarRatings
                      rating={product.rating.rate}
                      starDimension="16px"
                      starSpacing="1px"
                      starRatedColor="black"
                    />
                  </div>
                  <span>Stock: {product.rating.count}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default App
