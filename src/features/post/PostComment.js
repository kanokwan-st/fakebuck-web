import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import useAuth from "../../hooks/useAuth";
import * as postApi from "../../apis/post-api";
import { useEffect, useRef, useState } from "react";
import useLoading from "../../hooks/useLoading";

export default function PostComment({ post, clickComment, setClickComment }) {
  // console.log(post)
  //   const profileImage = Comments[0]?.User.profileImage;
  const [comment, setComment] = useState("");
  const { startLoading, stopLoading } = useLoading();
  const commentRef = useRef();

  const {
    authenticatedUser: { profileImage, id },
  } = useAuth();

  const handleSend = async (e) => {
    startLoading();
    console.log(comment);
    const data = {
      title: comment,
    };
    await postApi.createComment(post.id, data);
    setComment("");
    stopLoading();
  };

  useEffect(() => {
    setClickComment(false)
  })

  return (
    <div className="d-flex py-2 gap-2">
      <Link to={`/profile/${id}`}>
        <Avatar src={profileImage} size="32" />
      </Link>
      <input
        className="form-control rounded-pill shadow-none border-0 h-9 text-3.5 bg-gray-200 focus-bg-gray-200"
        placeholder="Write a comment..."
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        ref={commentRef}
      ></input>
      <button onClick={handleSend}>
        <i className="fa-solid fa-paper-plane pt-2"></i>
      </button>
      <>
        {clickComment && commentRef.current.focus()}
      </>
    </div>
  );
}
