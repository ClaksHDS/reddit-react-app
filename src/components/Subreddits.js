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
          {/* map over subreddits and display a button for each subreddits*/}
          {subredditLinks.slice(0, 15).map((subreddit) => {
            const { id, icon, url, name } = subreddit;
            return (
              <li key={id} className='subreddit'>
                {icon ? (
                  <img
                    src={icon}
                    alt='subreddit icon miniature'
                    className='subreddit-icon'
                  />
                ) : (
                  ""
                )}
                <button
                  className='subreddit-link'
                  onClick={() =>
                    dispatch(getSubredditPosts(subreddit.display_name))
                  }
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
