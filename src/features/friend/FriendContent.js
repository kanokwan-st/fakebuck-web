import { useLocation } from "react-router-dom";
import FriendRequest from "./FriendRequest";
import FriendSuggestion from "./FriendSuggestion";
import AllFriend from "./AllFriend";

export default function FriendContent() {
  const location = useLocation().pathname;
  //   console.log(location);

  const CheckPath = () => {
    if (location === "/friend") {
      return <FriendRequest />;
    } else if (location === "/friend/suggestion") {
      return <FriendSuggestion />;
    } else if (location === "/friend/allfriend") {
      return <AllFriend />;
    }
  };

  return (
    <div
      className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5"
      style={{ width: "calc(100% - 360px)" }}
    >
      <CheckPath />
    </div>
  );
}
