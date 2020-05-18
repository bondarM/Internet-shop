import axios from "axios";
export const getItems = () => {
  return axios
    .get(`http://localhost:4000/items`)
    .then((res) => res)
    .catch((err) => err);
};
