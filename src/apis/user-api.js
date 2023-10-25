import axios from "../config/axios";

export const getProfileUser = (profileUserId) => 
  axios.get('/users/' + profileUserId);

