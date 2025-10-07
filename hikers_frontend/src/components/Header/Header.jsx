import "./Header.css";
import logo from "../../assets/hikerslogo_transparent.png";

function Header({ onLogInClick, onRegisterClick }) {
  return (
    <div className="header">
      <img src={logo} alt="Hikers Logo" className="header__logo" />
      <nav className="header__btns">
        <button
          onClick={onLogInClick}
          className="header__login__btn"
          type="button"
        >
          <p className="header__btn__text">Log In</p>
        </button>
        <button
          onClick={onRegisterClick}
          className="header__register__btn"
          type="button"
        >
          <p className="header__btn__text">Register</p>
        </button>
      </nav>
    </div>
  );
}

export default Header;
