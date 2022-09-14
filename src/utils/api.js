import axios from "axios";

const getData = axios.create({
  baseURL: "https://www.reddit.com",
});

export default getData;
