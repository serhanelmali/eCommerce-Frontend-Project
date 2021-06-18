import "./producttile.scss";
import { Plus, Like } from "../../../assets/icons/SVG";
const ProductTile = (props) => {
  return props.message ? (
    <div className="productMessage">
      <div className="productMessage--gradient"></div>
      <div className="productMessage__msgContainer">
        <p>{props.name}</p>
        <div className="productMessage__msgContainer--altContainer">
          <img src={props.icon} />
          <span>{props.time}</span>
        </div>
      </div>
    </div>
  ) : props.hover ? (
    <div className="productHover">
      <div className="productHover__hoverState">
        <button>
          <Plus />
        </button>
        <button>
          <Like />
        </button>
      </div>
      <img src={props.image} />
      <div className="productHover__alt">
        <p>{props.name}</p>
        <p className="productHover__alt--price">$ {props.price}</p>
      </div>
    </div>
  ) : (
    "button"
  );
};

export default ProductTile;