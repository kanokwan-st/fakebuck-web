import * as friendApi from "../../apis/friend-api";
import defaultImage from "../../assets/blank.png";

export default function SuggestedCard({ suggestion, setSuggestions }) {
  //   console.log(suggestion);
  const handleClickAddFriend = async () => {
    await friendApi.addFriend(suggestion.id);
    setSuggestions((previousSuggestions) => {
      const deepClone = structuredClone(previousSuggestions);
      const updatedSuggestions = deepClone.filter(
        (el) => el.id !== suggestion.id
      );
      return updatedSuggestions;
    });
  };

  const handleClickDelete = async () => {
    setSuggestions((previousSuggestions) => {
      const deepClone = structuredClone(previousSuggestions);
      const updatedSuggestions = deepClone.filter(
        (el) => el.id !== suggestion.id
      );
      return updatedSuggestions;
    });
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card h-100 shadow">
        <img
          src={suggestion.profileImage || defaultImage}
          className="card-img-top"
          alt="user"
        />
        <div className="card-body">
          <h6 className="card-title">
            {suggestion.firstName} {suggestion.lastName}
          </h6>
          <div className="d-flex flex-column gap-2">
            <button
              onClick={handleClickAddFriend}
              className="btn btn-primary text-3.5"
            >
              Add Friend
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
