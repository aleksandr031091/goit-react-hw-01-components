import PropTypes from "prop-types";
import scss from "./FriendListItem.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={scss.item}>
    <span className={isOnline ? scss.online : scss.offLine} />
    <img className={scss.avatar} src={avatar} alt="" width="48" />
    <p className={scss.name}>{name}</p>
  </li>
);

export default FriendListItem;

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
