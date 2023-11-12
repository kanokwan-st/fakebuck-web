import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

export default function Comment({ comment: { User, title } }) {
  const { id, profileImage, firstName, lastName } = User;
  // console.log(comment);

  return (
    <div className="d-flex gap-2 py-1">
      <Link to={`/profile/${id}`}>
        <Avatar src={profileImage} size="32" />
      </Link>

      <div className="d-flex flex-column">
        <div className="d-flex align-items-center gap-1">
          <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
            <Link
              to={`/profile/${id}`}
              className="text-dark fw-bold no-underline hover-underline text-3"
            >
              {firstName} {lastName}
            </Link>
            <small>{title}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
