import { json } from "react-router-dom";

export const urlRoot = "https://www.reddit.com";

export const getSubredditPosts = async (subreddit, thunkAPI) => {
  const response = await fetch(`${urlRoot}${subreddit}.json`);
  const data = await response.json();
  return json.data.children.map((post) => post.data);
};

export const getPopularPosts = async (post, thunkAPI) => {
  /* const response = await fetch(`${urlRoot}/r/popular/`);
  const data = await response.json();
  return json.data.children((post) => post.data); */
  const data = await fetch(`https://www.reddit.com/${post.subreddit}.json`);
  const json = await data.json();
  return json;
};

export const searchSubreddit = async (query, thunkAPI) => {
  const response = await fetch(`${urlRoot}/search.json?q=${query}`);
  const data = await response.json();
  return json.data.children((query) => query.data);
};
