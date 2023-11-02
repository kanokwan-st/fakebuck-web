import axios from '../config/axios'

export const createPost = input => axios.post('/posts', input);
export const getAllPostIncFriend = () => axios.get('/posts/friends');
export const deletePostById = postId => axios.delete(`/posts/${postId}`);