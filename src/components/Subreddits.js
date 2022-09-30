import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSubreddits } from "../features/subreddits/SubredditSlice";
import { Loading } from "../components";
/* react icons */

/* styles */
import Wrapper from "../assets/wrappers/SubredditLinks";

const Subreddits = () => {
  const dispatch = useDispatch();
  const { isLoading, hasError, subredditLinks } = useSelector(
    (store) => store.subredditLinks
  );

  useEffect(() => {
    dispatch(getSubreddits());
  }, []);

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
          {subredditLinks.map((subreddit) => {
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
                <Link to={url} className='subreddit-link'>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Subreddits;
