import PropTypes from "prop-types";
import scss from "./FriendListItem.scss";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    <span class={isOnline} />
    <img class={scss.avatar} src={avatar} alt="" width="48" />
    <p class={scss.name}>{name}</p>
  </li>
);

export default FriendListItem;

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
