import "./ModalWithForm.css";
import mwfclosebtn from "../../assets/mwfclosebtn.svg";

const ModalWithForm = ({
  isOpen,
  handleCloseClick,
  onSubmit,
  title,
  children,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button className="modal__close-btn" onClick={handleCloseClick}>
          <img
            src={mwfclosebtn}
            alt="close button"
            className="modal__close-btn"
          />
        </button>
        <h2 className="modal__header">{title}</h2>
        <form onSubmit={handleSubmit} className="modal__form" noValidate>
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
