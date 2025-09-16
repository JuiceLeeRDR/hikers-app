import "./ImageCard.css";
import trailimgcard1 from "../../assets/trailreview1.jpg";
import likebtn from "../../assets/likebtn.svg";
import likedbtn from "../../assets/likedbtn.svg";

const ImageCard = () => {
  const handleImgCardClick = () => {
    onSelectCard(item);
  };
  return (
    <li className="imgcard-card">
      <img
        className="imgcard-card__image"
        src={trailimgcard1}
        alt=""
        onClick={handleImgCardClick}
      />
      <div className="imgcard-card__info-container">
        <h2 className="imgcard-card__text">Test Img</h2>
        <button className="img__likebtn" type="button">
          <img src={likebtn} alt="like button" className="img-likebutton" />
        </button>
        <button className="img__deletebtn" type="button">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ImageCard;
