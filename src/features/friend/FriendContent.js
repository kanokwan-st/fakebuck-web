import { useLocation } from "react-router-dom";
import FriendRequest from "./FriendRequest";
import FriendSuggestion from "./FriendSuggestion";
import AllFriend from "./AllFriend";
import { useEffect, useState } from "react";
import * as friendApi from "../../apis/friend-api";

export default function FriendContent() {
  const [friends, setFriends] = useState([]);
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

  useEffect(() => {
    const fetchPage = async () => {
      const res = await friendApi.getFriendRequestData();
      // console.log(res)
      // console.log(res.data.requestData)
      setFriends(res.data.requestData);
    };
    fetchPage();
    console.log(friends);
  }, []);
  

  return (
    <div
      className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5"
      style={{ width: "calc(100% - 360px)" }}
    >
      <CheckPath />
    </div>
  );
}
