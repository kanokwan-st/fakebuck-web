import { useEffect, useState } from "react";
import * as friendApi from "../../apis/friend-api";
import AllFriendCard from "./AllFriendCard";

export default function AllFriend() {
  const [allFriends, setAllFriends] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      const res = await friendApi.getAllFriendData();
      setAllFriends(res.data.friendData);
    };
    fetchPage();
  }, []);

  // console.log(allFriends);

  return (
    <>
      <h1 className="mb-3 fw-bold text-5">All Friends</h1>
      <div className="row g-2">
        {allFriends.map((el) => (
          <AllFriendCard key={el.id} friend={el} />
        ))}
      </div>
    </>
  );
}
