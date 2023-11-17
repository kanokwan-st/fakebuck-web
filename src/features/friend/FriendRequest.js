import { useEffect, useState } from "react";
import RequesterCard from "./RequesterCard";
import * as friendApi from '../../apis/friend-api'

export default function FriendRequest() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      const res = await friendApi.getFriendRequestData();
      setFriends(res.data.requestData);
    };
    fetchPage();
  }, []);

  // console.log(friends);

  return (
    <>
      <h1 className="mb-3 fw-bold text-5">Friend Requests</h1>
      <div className="row g-2">
        {friends.map((el) => (
          <RequesterCard key={el.id} friend={el}  setFriends={setFriends}/>
        ))}
      </div>
    </>
  );
}
