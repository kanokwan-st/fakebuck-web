import * as friendApi from "../../apis/friend-api";

export default function RequesterCard({ friend: { Requester }, setFriends }) {
  const handleClickConfirm = async () => {
    await friendApi.acceptFriend(Requester.id);
    setFriends((previousFriends) => {
      const deepClone = structuredClone(previousFriends);
      const updatedFriends = deepClone.filter((el) => el.Requester.id !== Requester.id)
      return updatedFriends;
    });
  };

  const handleClickDelete = async () => {
    await friendApi.deleteFriend(Requester.id);
    setFriends((previousFriends) => {
      const deepClone = structuredClone(previousFriends);
      const updatedFriends = deepClone.filter((el) => el.Requester.id !== Requester.id)
      return updatedFriends;
    });
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card h-100 shadow">
        <img src={Requester.profileImage} className="card-img-top" alt="user" />
        <div className="card-body">
          <h6 className="card-title">
            {Requester.firstName} {Requester.lastName}
          </h6>
          <div className="d-flex flex-column gap-2">
            <button
              onClick={handleClickConfirm}
              className="btn btn-primary text-3.5"
            >
              Confirm
            </button>
            <button
              onClick={handleClickDelete}
              className="btn btn-gray-200 text-3.5"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
