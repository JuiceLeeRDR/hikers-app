import { React, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import LogInModal from "../LogInModal/LogInModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Profile from "../Profile/Profile";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ReviewsPage from "../ReviewsPage/ReviewsPage";
import SocialFeed from "../SocialFeed/SocialFeed";
import AddPostModal from "../AddPostModal/AddPostModal";
import ReviewsModal from "../ReviewsModal/ReviewsModal";
import ImageCardModal from "../ImageCardModal/ImageCardModal";
import TrailsPage from "../TrailsPage/TrailsPage";
import TrailsCardModal from "../TrailsCardModal/TrailsCardModal";
import {
  deleteImgs,
  deleteReviews,
  postNewImg,
  postNewReviews,
} from "../utils/api";
import { removeToken } from "../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedImg, setSelectedImg] = useState([]);
  const [feedImgs, setFeedImgs] = [];
  const [reviews, setReviews] = useState([]);
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [selectedReview, setSelectedReview] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [banner, setBanner] = useState("");

  const navigate = useNavigate();

  const handleDeleteBtnClick = () => {
    setActiveModal("delete");
  };

  const handleCardClick = (card) => {
    setSelectedImg(card);
    setActiveModal("preview");
  };

  const handleRegisterBtnClick = () => {
    setActiveModal("register");
  };

  const handleLogInBtnClick = () => {
    setActiveModal("log-in");
  };

  const handleEditProfileBtnClick = () => {
    setActiveModal("edit-profile");
  };

  const handleAddPostBtnClick = () => {
    setActiveModal("add-post");
  };

  const handleAddReviewBtnClick = () => {
    setActiveModal("add-review");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogOutBtnClick = () => {
    setIsLoggedIn(false);
    removeToken();
  };

  const onAddImg = ({ name, imageUrl }) => {
    console.log("Data being sent:", { name, imageUrl });
    postNewImg({ name, imageUrl })
      .then((newImg) => {
        setFeedImgs([newImg, ...feedImgs]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onDeleteImg = (card) => {
    deleteImgs(card._id)
      .then(() => {
        setImgs((prevImgs) => prevImgs.filter((img) => img._id !== card._id));
        setSelectedImg({});
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onAddReview = ({ imageUrl, rating, difficulty, review }) => {
    console.log("Data being sent:", { imageUrl, rating, difficulty, review });
    postNewReviews({ imageUrl, rating, difficulty, review })
      .then((newReview) => {
        setSelectedReview([newReview, ...selectedReview]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onDeleteReview = (review) => {
    deleteReviews(review._id)
      .then(() => {
        setSelectedReview((prevItems) =>
          prevItems.filter((item) => item._id !== review._id)
        );
        setSelectedImg({});
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <div className="app__content">
        <Header
          onLogInClick={handleLogInBtnClick}
          onRegisterClick={handleRegisterBtnClick}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                onTrailSelect={(trail) => {
                  setSelectedTrail(trail);
                  setActiveModal("trail");
                }}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                handleEditProfileBtnClick={handleEditProfileBtnClick}
                handleAddPostBtnClick={handleAddPostBtnClick}
                handleAddReviewBtnClick={handleAddReviewBtnClick}
                onImgClick={handleCardClick}
                feedImgs={feedImgs}
              />
            }
          />
          <Route
            path="/reviews"
            element={
              <ReviewsPage
                handleAddReviewBtnClick={handleAddReviewBtnClick}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/social-feed"
            element={<SocialFeed feedImgs={feedImgs} />}
          />
          {/* <Route path="/trails" element={<TrailsPage trails={trails} />} /> */}
        </Routes>{" "}
        <EditProfileModal
          isOpen={activeModal === "edit-profile"}
          handleCloseClick={closeActiveModal}
        />
        <LogInModal
          isOpen={activeModal === "log-in"}
          handleCloseClick={closeActiveModal}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          handleCloseClick={closeActiveModal}
        />
        <AddPostModal
          isOpen={activeModal === "add-post"}
          handleCloseClick={closeActiveModal}
          onAddImg={onAddImg}
          card={selectedImg}
        />
        <ReviewsModal
          isOpen={activeModal === "add-review"}
          handleCloseClick={closeActiveModal}
        />
        <ImageCardModal
          card={selectedImg}
          isOpen={activeModal === "preview"}
          handleCloseClick={closeActiveModal}
          deleteClick={handleDeleteBtnClick}
        />
        <TrailsCardModal
          isOpen={activeModal === "trail"}
          name={selectedTrail?.name}
          difficulty={selectedTrail?.difficulty}
          city={selectedTrail?.city}
          handleCloseClick={closeActiveModal}
        />
      </div>
    </div>
  );
}

export default App;
