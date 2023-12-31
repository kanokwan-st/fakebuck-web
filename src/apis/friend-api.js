import axios from "../config/axios";

export const deleteFriend = (friendId) => axios.delete("/friends/" + friendId);
export const addFriend = (friendId) => axios.post("/friends/" + friendId);
export const acceptFriend = (friendId) => axios.patch("/friends/" + friendId);

export const getFriendRequestData = () => axios.get("/friends/");
export const suggestionFriend = () => axios.get("/friends/suggestion");
export const getAllFriendData = () => axios.get('friends/allfriend');
