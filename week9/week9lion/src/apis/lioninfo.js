import axios from "axios";

export const baseUrl =
  "https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api";

export const getUserPerPage = (page) => {
  return axios.get(`${baseUrl}/user?page=${page}`);
};

export const getUserPerGender = (gender) => {
  return axios.get(`${baseUrl}/user?gender=${gender}`);
};

export const getUserPerStack = (stack) => {
  return axios.get(`${baseUrl}/user?stack=${stack}`);
};
