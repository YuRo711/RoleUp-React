import "./Header.css";
import banner from "../../images/banner 1.jpg";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const {texts} = props;

  return (
    <header className="header">
      <img className="header__logo"
        src={logo}
        alt="roleup logo"
      />
      <h2 className="header__logo-title">RoleUp</h2>
      <nav className="header__links">
      {
        texts.links.map((link) => 
          <NavLink className="header__link" to={link.url}>
            {link.text}
          </NavLink>
        )
      }
      </nav>
    </header>
  );
}