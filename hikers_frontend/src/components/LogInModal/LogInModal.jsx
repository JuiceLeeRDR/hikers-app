import "./LogInModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import modalbg from "../../assets/loginmodalmtnbackground.png";

const LogInModal = ({
  isOpen,
  handleCloseClick,
  //   handleLogin,
  //   handleSignUpBtnClick,
}) => {
  //   const [data, setData] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     handleLogin(data);
  //   };

  return (
    <ModalWithForm
      // buttonText="Log In"
      title="Log In"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      //   onSubmit={handleSubmit}
      className="login-modal__container"
    >
      {/* <img
        src={modalbg}
        alt="background image for login modal"
        className="login__modal__bg"
      /> */}
      <label htmlFor="user-email" className="modal__label">
        Email
        <input
          name="email"
          type="email"
          id="user-email"
          className="modal__input"
          placeholder="Email"
          required
          //   onChange={handleChange}
          //   value={data.email}
        />
      </label>
      <label htmlFor="user-password" className="modal__label">
        Password
        <input
          name="password"
          type="password"
          id="user-password"
          className="modal__input"
          placeholder="Password"
          required
          //   onChange={handleChange}
          //   value={data.password}
        />
      </label>
      <button type="submit" className="modal__save-button">
        Log In
      </button>
      <button
        type="button"
        className="modal__signup-btn"
        // onClick={handleSignUpBtnClick}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LogInModal;
