import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const getAllUserPerPage = () => {
  return axios.get(`${baseUrl}/user?page=0`);
};

export const getUserPerPage = async (page: string) => {
  const res = await fetch(`${baseUrl}/user?page=${page}`, { next: { revalidate: 300 } });
  // const res = await fetch(`${baseUrl}/user?page=${page}`);

  const result = await res.json();
  return result.data;
};

export const getUserPerGender = async (gender: string) => {
  const res = await fetch(`${baseUrl}/user?gender=${gender}`, { next: { revalidate: 300 } });
  // const res = await fetch(`${baseUrl}/user?gender=${gender}`);
  const result = await res.json();
  return result.data;
};

export const getUserPerStack = async (stack: string) => {
  const res = await fetch(`${baseUrl}/user?stack=${stack}`, { next: { revalidate: 300 } });
  // const res = await fetch(`${baseUrl}/user?stack=${stack}`);
  const result = await res.json();
  return result.data;
};
