import { useState } from "react";
import { useAppContext } from "../../../context/state";
import ProductTile from "../../shared-components/ProductTile";
import "./popularitems.scss";

//LOAD MORE BUTTON
//border width
//Product Tile1
//favid will match, if it's already in it then it will remove it.

const PopularItems = () => {
  const state = useAppContext();
  const [navigationValue, setNavigationValue] = useState(1);

  const onClickHandler = (e) => {
    return setNavigationValue(e.target.value);
  };

  const cartHandler = () => state.setCart([...state.cart, this]);
  const favHandler = () => state.setFavorites([...state.favorites, this]);
  return (
    <div className="popular">
      <div className="popular__line--container">
        <div className="popular__line--border"></div>
        <div className="popular__line--title">Popular Items</div>
        <div className="popular__line--border"></div>
      </div>
      <div
        className="popular__item--container"
        style={
          navigationValue === 1
            ? { marginLeft: "0" }
            : navigationValue === 2
            ? { marginLeft: "-20.9rem" }
            : navigationValue === 3
            ? { marginLeft: "-41.6rem" }
            : navigationValue === 4
            ? { marginLeft: "-62.5rem" }
            : navigationValue === 5
            ? { marginLeft: "-62.5rem" }
            : ""
        }
      >
        {state.productData.slice(0, state.popularItemsSlicer).map((product) => (
          <ProductTile
            id={product.id}
            image={product.image}
            name={product.name}
            time={product.time}
            price={product.price}
            button={product.button}
            hover={product.hover}
            icon={product.icon}
            message={product.message}
            cartHandler={() => cartHandler()}
            favHandler={() => favHandler()}
          />
        ))}
      </div>
      <ul
        className="popular__navigation"
        style={state.size < 720 ? { display: "flex" } : { display: "none" }}
      >
        <li>
          <input
            type="radio"
            name="foo"
            value="1"
            onClick={(e) => onClickHandler(e)}
          ></input>
        </li>
        <li>
          <input
            type="radio"
            name="foo"
            value="2"
            onClick={(e) => onClickHandler(e)}
          ></input>
        </li>
        <li>
          <input
            type="radio"
            name="foo"
            value="3"
            onClick={(e) => onClickHandler(e)}
          ></input>
        </li>
        <li>
          <input
            type="radio"
            name="foo"
            value="4"
            onClick={(e) => onClickHandler(e)}
          ></input>
        </li>
        <li>
          <input
            type="radio"
            name="foo"
            value="5"
            onClick={(e) => onClickHandler(e)}
          ></input>
        </li>
      </ul>
      <div className="popular__button--wrapper">
        <button>LOAD MORE</button>
      </div>
    </div>
  );
};

export default PopularItems;
