import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: `https://invicara.herokuapp.com`,
    headers: {
      Authorization: localStorage.getItem(`token`),
    },
  });
};
