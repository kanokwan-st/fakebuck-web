import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import { useState, memo } from "react";
import PostForm from "./PostForm";

function PostCreateToggle({ createPost, setPosts }) {
  const {
    authenticatedUser: { id, profileImage, firstName },
  } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <div className="border bg-white shadow-sm px-3 rounded-lg tw-py-3">
      <div className="d-flex gap-2">
        <Link to={`/profile/${id}`}>
          <Avatar src={profileImage} size="40" />
        </Link>
        <button
          className="btn rounded-pill text-muted text-start flex-1 btn-gray-200"
          onClick={() => setOpen(true)}
        >
          What's on your mind, {firstName}?
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Create Post">
        <PostForm onSuccess={() => setOpen(false)} setPosts={setPosts} />
      </Modal>
    </div>
  );
}

export default memo(PostCreateToggle);
