import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const getAllUserPerPage = () => {
  return axios.get(`${baseUrl}/user?page=0`);
};

export const getUserPerPage = (page: string) => {
  return axios.get(`${baseUrl}/user?page=${page}`);
};

export const getUserPerGender = (gender: string) => {
  return axios.get(`${baseUrl}/user?gender=${gender}`);
};

export const getUserPerStack = (stack: string) => {
  return axios.get(`${baseUrl}/user?stack=${stack}`);
};
