import "./Header.css";
import logo from "../../assets/hikerslogo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Hikers Logo" className="header__logo" />
      <div className="header__btns">
        <button className="header__login__btn" type="button">
          Log In
        </button>
        <button className="header__register__btn" type="button">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
