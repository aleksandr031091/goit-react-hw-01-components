import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import scss from "./FriendList.module.scss";

const FriendList = ({ friends }) => (
  <section className={scss.sectionFrends}>
    <ul className={scss.friendList}>
      {friends.map((item) => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  </section>
);

export default FriendList;

FriendList.prototype = {
  friends: PropTypes.arrayOf({
    item: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
