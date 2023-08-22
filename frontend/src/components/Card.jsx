import StarRatings from "react-star-ratings";
import "../sass/main.scss";

export const Card = ({ title, image, description, price, rating }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-description">
                    {description.slice(0, 50)}...
                </p>
                <p className="card-price">${price}</p>
                <div className="card-detail">
                    <StarRatings
                        rating={rating.rate}
                        starDimension="16px"
                        starSpacing="1px"
                        starRatedColor="black"
                    />
                </div>
                <span>Stock: {rating.count}</span>
            </div>
        </div>
    )
}
