import { useParams } from "react-router-dom";
import * as friendsApi from "../../apis/friend-api";
import { STATUS_FRIEND, STATUS_UNKNOWN } from "../../config/constant";
import useAuth from "../../hooks/useAuth";

export default function AccepterAction({
  setProfileFriends,
  setStatusWithAuthUser,
}) {
  const { userId } = useParams();
  const { authenticatedUser } = useAuth();

  const handleClickAdd = async () => {
    await friendsApi.acceptFriend(userId);
    setStatusWithAuthUser(STATUS_FRIEND);
    setProfileFriends(oldFriends => [...oldFriends, authenticatedUser]);
  };

  const handleClickReject = async () => {
    await friendsApi.deleteFriend(userId); //ลบคำขอเพื่อน
    setStatusWithAuthUser(STATUS_UNKNOWN); //set status ให้เป็นไม่รู้จัก
  };
  return (
    <>
      <button className="btn btn-gray-200" onClick={handleClickAdd}>
        <i className="fa-solid fa-user-check" /> <span>Accept</span>
      </button>
      <button className="btn btn-gray-200 ms-3" onClick={handleClickReject}>
        <i className="fa-solid fa-user-xmark" /> <span>Reject</span>
      </button>
    </>
  );
}
