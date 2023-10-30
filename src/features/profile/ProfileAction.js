import {
  STATUS_ACCEPTER,
  STATUS_FRIEND,
  STATUS_REQUESTER,
  STATUS_UNKNOWN,
} from "../../config/constant";
import { STATUS_ME } from "../../config/constant";
import AccepterAction from "./AccepterAction";
import FriendAction from "./FriendAction";
import MeAction from "./MeAction";
import RequesterAction from "./RequesterAction";
import UnknownAction from "./UnknownAction";

export default function ProfileAction({
  statusWithAuthUser,
  updateProfileUser,
  setProfileFriends,
  setStatusWithAuthUser,
}) {
  return (
    <div className="mb-3 align-self-md-end">
      {statusWithAuthUser === STATUS_ME && (
        <MeAction updateProfileUser={updateProfileUser} />
      )}
      {statusWithAuthUser === STATUS_FRIEND && (
        <FriendAction
          setProfileFriends={setProfileFriends}
          setStatusWithAuthUser={setStatusWithAuthUser}
        />
      )}
      {statusWithAuthUser === STATUS_UNKNOWN && (
        <UnknownAction setStatusWithAuthUser={setStatusWithAuthUser} />
      )}
      {statusWithAuthUser === STATUS_REQUESTER && (
        <AccepterAction
          setStatusWithAuthUser={setStatusWithAuthUser}
          setProfileFriends={setProfileFriends}
        />
      )}
      {statusWithAuthUser === STATUS_ACCEPTER && (
        <RequesterAction setStatusWithAuthUser={setStatusWithAuthUser} />
      )}
    </div>
  );
}
