import useAuth from "../../hooks/useAuth";
import * as postApi from "../../apis/post-api";
import PostComment from "./PostComment";
import CommentList from "./CommentList";
import { useState } from "react";

export default function PostAction({ post: { Likes, id }, setPosts, post }) {
  const { authenticatedUser } = useAuth();
  const isUserLiked = Likes.find((el) => el.userId === authenticatedUser.id); // หาว่ามี userId ที่ตรงกับคนที่ล็อคอินมั้ย(ถ้ามีคือคนนั้นกดไลค์โพสนี้)
  const [clickComment, setClickComment] = useState(false);

  const handleClickLikeButton = async () => {
    if (isUserLiked) {
      await postApi.unlike(id);
      setPosts((previousPosts) => {
        const deepClone = structuredClone(previousPosts);
        const idx = deepClone.findIndex((el) => el.id === id);
        deepClone[idx].Likes = deepClone[idx].Likes.filter(
          (el) => el.userId !== authenticatedUser.id
        );
        return deepClone;
      });
    } else {
      const res = await postApi.createLike(id);
      setPosts((previousPosts) => {
        const deepClone = structuredClone(previousPosts);
        const idx = deepClone.findIndex((el) => el.id === id);
        deepClone[idx].Likes.push(res.data.like);
        return deepClone;
      });
    }
  };
  return (
    <>
      <div className="d-flex gap-1 py-1">
        <button
          onClick={handleClickLikeButton}
          className={`btn ${
            isUserLiked ? "text-primary" : "text-muted"
          } flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200`}
        >
          <i className="fa-regular fa-thumbs-up" />
          <small className="fw-bold">Like</small>
        </button>
        <button
          className="btn text-muted flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200"
          onClick={() => setClickComment(true)}
        >
          <i className="fa-regular fa-message" />
          <small className="fw-bold">Comment</small>
        </button>
      </div>
      <hr className="hr-sm my-0" />
      <div className="pt-2 d-flex flex-column gap-1">
        <CommentList post={post} />
        <PostComment
          post={post}
          clickComment={clickComment}
          setClickComment={setClickComment}
          setPosts={setPosts}
        />
      </div>
    </>
  );
}
