import "./Profile.css";
import banner from "../../assets/abt-section2.jpg";
import pfp from "../../assets/naruto.jpeg";
import ImageCard from "../ImageCard/ImageCard";

const Profile = ({
  handleEditProfileBtnClick,
  handleAddPostBtnClick,
  handleAddReviewBtnClick,
  onImgClick,
  feedImgs,
}) => {
  return (
    <div className="profile__page">
      <div className="profile">
        <div className="profile__header">
          <div className="profile__banner">
            <img
              src={banner}
              alt="User banner"
              className="profile__banner-img"
            />
          </div>
          <div className="profile__avatar-wrapper">
            <img className="profile__avatar" src={pfp} alt="User avatar" />
          </div>
          <h2 className="profile__username">RushDown Uzumaki</h2>
        </div>
        <div className="profile__info">
          <p className="profile__name">The Chosen One</p>
          <p className="profile__about">
            <strong>Location:</strong> Concord, Nc
          </p>
          <button
            className="profile__edit-profile__btn"
            type="button"
            onClick={handleEditProfileBtnClick}
          >
            Edit profile
          </button>
          <button
            className="profile__add-post__btn"
            type="button"
            onClick={handleAddPostBtnClick}
          >
            Add a post
          </button>
          <button
            className="profile__add-review__btn"
            type="button"
            onClick={handleAddReviewBtnClick}
          >
            Add a review
          </button>
        </div>
        <div className="profile__recent-info">
          <div className="profile__recent">
            <h3>Recent Hikes</h3>
            <ul>
              <li>Appalachian Trail</li>
              <li>Rocky Mountain National Park</li>
              <li>Zion Canyon</li>
            </ul>
          </div>
          <div className="profile__recent">
            <h3>Recent Reviews</h3>
            <ul>
              <li>Appalachian Trail - 5/5</li>
              <li>Rocky Mountain National Park - 5/5</li>
              <li>Zion Canyon - 5/5</li>
            </ul>
          </div>
        </div>
        <div className="profile__feed">
          <ImageCard onImgClick={onImgClick} feedImgs={feedImgs} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
