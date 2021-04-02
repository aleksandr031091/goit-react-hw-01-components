import Profile from "./components/Profile/Profile";
import user from "./data/user.json";

import Statistics from "./components/Statistics/Statistics";
import statistics from "./data/statistical-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import tnansaction from "./data/transactions.json";

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="Upload stats" statistics={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory items={tnansaction} />
  </>
);

export default App;
