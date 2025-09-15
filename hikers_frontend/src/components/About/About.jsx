import "./About.css";
import reviewsimg from "../../assets/homepage-reviews.png";
import selfieimg from "../../assets/homepage-selfie.jpg";
import trailimg from "../../assets/homepage-trails.jpg";

const About = () => {
  return (
    <div className="about__cntnr">
      <div className="about__info-bg">
        <div className="about__bulletpoint__cntnr">
          <li className="about-card about-card__trail">
            <div className="about-card__info-container">
              <h2 className="about-card__text">• Find Your Trail</h2>

              <img className="about-card__image" src={trailimg} alt="" />
            </div>
          </li>
          <li className="about-card about-card__review">
            <div className="about-card__info-container">
              <h2 className="about-card__text">• Leave A Review</h2>

              <img className="about-card__image" src={reviewsimg} alt="" />
            </div>
          </li>
          <li className="about-card about-card__post">
            <div className="about-card__info-container">
              <h2 className="about-card__text">• Post Your Journey</h2>

              <img className="about-card__image" src={selfieimg} alt="" />
            </div>
          </li>
        </div>
        <p className="about__text">
          Hikers is an app for outdoor lovers who enjoy the warmth of the sun
          soaking in their skin, wind hitting their face, and earth beneath
          their feet! The world is now full of screens everywhere and a lot of
          people have disconnected with what is real and tangible, the earth.
          Here, we attempt to help reconnect people with mother nauture and help
          these same people make new connections with likeminded individuals.
          So, find your trail, maybe even a buddy, and explore the world!
        </p>
        <p className="about__text about__text_bottom-text">Hike on, Hikers!</p>
      </div>
    </div>
  );
};

export default About;
