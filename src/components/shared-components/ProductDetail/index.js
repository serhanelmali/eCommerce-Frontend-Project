import { useState } from "react";
import "./productdetail.scss";
import {
  Facebook,
  Google,
  Twitter,
  Pinterest,
} from "../../../assets/icons/SVG";

//product detail 2 kaldı sadece

const ProductDetail = (props) => {
  const [price, setPrice] = useState(299.99);
  const [value, setValue] = useState(1);
  const [readMore, setReadMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(props.imageFirst);

  const onClickHandlerSum = () => {
    setValue(value + 1);
    setPrice(price + 300.0);
  };
  const onClickHandlerMinus = () => {
    value > 1 ? setValue(value - 1) : setValue(value);
    value > 1 ? setPrice(price - 300) : setPrice(price);
  };
  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  const info =
    "Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris ";

  return (
    <div className="detail">
      <div className="detail__item--a">
        <img src={selectedImage} />
      </div>
      <div className="detail__item--b">
        <label for="image-select1" className="detail__item--b__thumbnail">
          <input
            className="detail__item--b__thumbnail--input"
            type="radio"
            name="images"
            id="image-select1"
          ></input>
          <div className="detail__item--b__thumbnail--sImages">
            <img
              onClick={() => setSelectedImage(props.imageFirst)}
              src={props.imageFirstSmall}
            />
          </div>
        </label>
        <label for="image-select2" className="detail__item--b__thumbnail">
          <input
            className="detail__item--b__thumbnail--input"
            type="radio"
            name="images"
            id="image-select2"
          ></input>
          <div className="detail__item--b__thumbnail--sImages">
            <img
              onClick={() => setSelectedImage(props.imageFirstBehind)}
              src={props.imageFirstSmallBehind}
            />
          </div>
        </label>
        <label for="image-select3" className="detail__item--b__thumbnail">
          <input
            className="detail__item--b__thumbnail--input"
            type="radio"
            name="images"
            id="image-select3"
          ></input>
          <div className="detail__item--b__thumbnail--sImages">
            <img
              onClick={() => setSelectedImage(props.imageSecond)}
              src={props.imageSecondSmall}
            />
          </div>
        </label>
        <label for="image-select4" className="detail__item--b__thumbnail">
          <input
            className="detail__item--b__thumbnail--input"
            type="radio"
            name="images"
            id="image-select4"
          ></input>
          <div className="detail__item--b__thumbnail--sImages">
            <img
              onClick={() => setSelectedImage(props.imageSecondBehind)}
              src={props.imageSecondSmallBehind}
            />
          </div>
        </label>
      </div>
      <div className="detail__item--c">
        <h1>${price}</h1>
        <select>
          <option>Dark Gray</option>
        </select>
        <div className="detail__item--c__valueCart">
          <div className="detail__item--c__valueCart__wrapper">
            <div className="detail__item--c__valueCart__wrapper--buttonWrapper">
              <button onClick={() => onClickHandlerMinus()}>-</button>
              <span>{value}</span>
              <button onClick={() => onClickHandlerSum()}>+</button>
            </div>
            <button className="detail__item--c__valueCart__wrapper--addCart">
              ADD TO CART
            </button>
          </div>
          <p>{info.slice(0, readMore ? 500 : 300)}</p>
          <span
            className="detail__item--c__valueCart__wrapper--readMore"
            onClick={() => readMoreHandler()}
          >
            Read more
          </span>
        </div>
        <ul className="detail__item--c--social">
          <li>Share</li>
          <li>
            <a href="https://www.facebook.com/OSFDigital/" target="_blank">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="https://osf.digital/" target="_blank">
              <Google />
            </a>
          </li>
          <li>
            <a href="https://osf.digital/" target="_blank">
              <Pinterest />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/osfdigital" target="_blank">
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;