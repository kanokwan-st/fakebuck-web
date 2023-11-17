import defaultImage from "../../assets/blank.png";

export default function AllFriendCard({
  friend: { profileImage, firstName, lastName },
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card h-100 shadow">
        <img
          src={profileImage || defaultImage}
          className="card-img-top"
          alt="user"
        />
        <div className="card-body">
          <h6 className="card-title">
            {firstName} {lastName}
          </h6>
        </div>
      </div>
    </div>
  );
}
