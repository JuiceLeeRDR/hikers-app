import "./AddPostModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const AddPostModal = ({ isOpen, onAddImg, handleCloseClick }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
    }
  }, [isOpen]);

  const handleSubmit = () => {
    onAddImg({ name, imageUrl });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <ModalWithForm
      // buttonText="Add garment"
      title="New Post"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="image-link-input" className="modal__label">
        Image link
        <input
          type="url"
          id="image-link-input"
          className="modal__input"
          placeholder="Paste a link to a picture"
          required
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <span className="modal__input-error" id="image-link-input-error"></span>
      </label>

      <label htmlFor="image-caption-input" className="modal__label">
        Caption
        <input
          type="text"
          id="image-caption-input"
          className="modal__input"
          placeholder="Type your caption"
          required
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
        <span
          className="modal__input-error"
          id="image-caption-input-error"
        ></span>
      </label>

      <button type="submit" className="modal__save-button">
        Save
      </button>
    </ModalWithForm>
  );
};

export default AddPostModal;
