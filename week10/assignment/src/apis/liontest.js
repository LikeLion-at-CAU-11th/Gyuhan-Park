import axios from "axios";

export const baseUrl =
  "https://jf60xmj7q3.execute-api.ap-northeast-2.amazonaws.com/api";

export const getAllQuestions = () => {
  return axios.get(`${baseUrl}/liontest/question`);
};

export const getTestResult = (answer) => {
  return axios.post(`${baseUrl}/liontest/result`, {
    answer,
  });
};
