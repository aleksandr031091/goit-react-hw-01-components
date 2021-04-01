import FriendListItem from "./FriendListItem";

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
