import axios from "../config/axios";

export const createPost = (input) => axios.post("/posts", input);
export const getAllPostIncFriend = () => axios.get("/posts/friends");
export const deletePostById = (postId) => axios.delete(`/posts/${postId}`);

export const unlike = (postId) => axios.delete(`/posts/${postId}/likes`);
export const createLike = (postId) => axios.post(`/posts/${postId}/likes`);

export const createComment = (postId, input) =>
  axios.post(`/posts/${postId}/comments`, input);

// export const editPostById = (postId, input) =>
//   axios.patch(`/posts/${postId}`, input);
