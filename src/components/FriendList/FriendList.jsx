import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import scss from "./FriendList.scss";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map((item) => (
      <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        key={item.id}
      />
    ))}
  </ul>
);

export default FriendList;
