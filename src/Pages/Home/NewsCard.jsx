import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mt-2 mb-10 border-b-2">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          
          {
            details.length > 150 ?
            <p>{details.slice(0,150)} <Link 
            to={`/news/${_id}`}
            className="text-red-500 font-bold">Read More</Link></p>
            :
            <p>{details}</p>
          }
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.object,
};
