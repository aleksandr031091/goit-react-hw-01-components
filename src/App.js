import user from "./data/user.json";
import statistics from "./data/statistical-data.json";
import friends from "./data/friends.json";
import tnansaction from "./data/transactions.json";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" statistics={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory items={tnansaction} />
  </>
);

export default App;
