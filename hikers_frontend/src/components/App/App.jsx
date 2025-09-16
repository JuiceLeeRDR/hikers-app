import { act, React, useEffect, useState } from "react";
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

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedReview, setSelectedReview] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  const handleDeleteBtnClick = () => {
    setActiveModal("delete");
  };

  const handleCardClick = () => {
    setSelectedCard(card);
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
          <Route path="/" element={<Main />} />

          <Route
            path="/profile"
            element={
              <Profile
                handleEditProfileBtnClick={handleEditProfileBtnClick}
                handleAddPostBtnClick={handleAddPostBtnClick}
                handleAddReviewBtnClick={handleAddReviewBtnClick}
              />
            }
          />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/social-feed" element={<SocialFeed />} />
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
        />
        <ReviewsModal
          isOpen={activeModal === "add-review"}
          handleCloseClick={closeActiveModal}
        />
        <ImageCardModal
          card={selectedCard}
          isOpen={activeModal === "preview"}
          handleCloseClick={closeActiveModal}
        />
      </div>
    </div>
  );
}

export default App;
