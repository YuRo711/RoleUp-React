import "./Hero.css";
import banner from "../../images/banner 1.jpg";

export default function Hero(props) {
  const {texts} = props;

  return (
    <div className="header__hero">
      <img className="header__banner"
        src={banner}
        alt="banner image"
      />
      <div className="header__overlay"/>
      <div className="header__text">
        <h1 className="header__title">
          {texts.title}
        </h1>
        <h2 className="header__subtitle">
          {texts.subtitle}
        </h2>
      </div>
    </div>
  );
}