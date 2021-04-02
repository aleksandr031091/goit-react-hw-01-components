import PropTypes from "prop-types";
import scss from "./Profile.module.scss";

const Profile = ({
  user: {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => (
  <section className={scss.sectionProfile}>
    <div className={scss.profile}>
      <div className={scss.description}>
        <img src={avatar} alt="Аватар пользователя" className={scss.avatar} />
        <h2 className={scss.Name}>{name}</h2>
        <p className={scss.descriptionItem}>@{tag}</p>
        <p className={scss.descriptionItem}>{location}</p>
      </div>

      <ul className={scss.stats}>
        <li className={scss.statsItems}>
          <span className={scss.statsDescription}>Followers</span>
          <span className={scss.quantity}>{followers}</span>
        </li>
        <li className={scss.statsItems}>
          <span className={scss.statsDescription}>Views</span>
          <span className={scss.quantity}>{views}</span>
        </li>
        <li className={scss.statsItems}>
          <span className={scss.statsDescription}>Likes</span>
          <span className={scss.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  </section>
);

export default Profile;

Profile.propTypes = {
  user: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }.isRequired,
  }).isRequired,
};
