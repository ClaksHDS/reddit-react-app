import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubreddits } from "../features/subreddits/SubredditSlice";
import { getSubredditPosts } from "../features/postsSlice/postsSlice";
import { Loading } from "../components";
/* styles */
import Wrapper from "../assets/wrappers/SubredditLinks";

const Subreddits = () => {
  const dispatch = useDispatch();
  const { isLoading, hasError, subredditLinks } = useSelector(
    (store) => store.subredditLinks
  );

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return (
      <div>
        <h3>Something went wrong</h3>
        <h4>try again later</h4>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className='subreddits-container'>
        <ul>
          {subredditLinks.slice(0, 14).map((subreddit) => {
            const { id, icon_img: icon, url, display_name: name } = subreddit;
            return (
              <li key={id} className='subreddit'>
                <img
                  src={
                    icon ||
                    `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                  }
                  alt={name}
                  className='subreddit-icon'
                />
                <button
                  className='subreddit-link'
                  onClick={() => dispatch(getSubredditPosts(name))}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Subreddits;
