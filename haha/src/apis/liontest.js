import axios from "axios";

const baseUrl = "http://front.cau-likelion.org";

export const getAllQuestions = () => {
  return axios.get(`${baseUrl}/liontest/question`);
};

export const getTestResult = (answer) => {
  return axios.post(`${baseUrl}/liontest/result`, {
    answer,
  });
};
