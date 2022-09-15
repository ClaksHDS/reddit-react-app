import axios from "axios";
export const baseURL = "https://www.reddit.com";

export const getSubreddit = async () => {
  const response = await axios(`${baseURL}/subreddits.json`);
  const json = await response.json();
  return json;
};
