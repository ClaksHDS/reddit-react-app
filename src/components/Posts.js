import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loading, NoMatch, Post } from "../components";
import { getPosts } from "../features/postsSlice/postsSlice";
/* react icons */
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { FaUserAstronaut, FaRegCommentDots } from "react-icons/fa";
/* styles */
import Wrapper from "../assets/wrappers/Posts";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, hasError, searchTerm, selectedSubreddit } =
    useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  if (hasError) {
    return (
      <div className='error full-page' style={{ textAlign: "center" }}>
        <h3>Uh oh...</h3>
        <p>Something went wrong</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return <NoMatch />;
  }

  return (
    <Wrapper>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className='post-wrapper'>
              <div className='votes-container'></div>
              <div className='post-container'>
                <div className='post-info'>
                  <p>
                    <FaUserAstronaut className='info-icon' />
                    Published by : <span>{post.author}</span>
                  </p>
                  <p>
                    {Math.round(
                      (new Date().getTime() / 1000 - post.created_utc) / 3600
                    )}{" "}
                    hours ago
                  </p>
                </div>
                <div className='post-title'>
                  <h4>{post.subreddit_name_prefixed}</h4>
                  <h3>{post.title}</h3>
                </div>
                <div className='post-content'>
                  {/*  {post.url.includes("i.reddit.it") ? (
                    <img
                      src={post.url}
                      alt='illustration of reddit post'
                      className='post-image img'
                    />
                  ) : null} */}
                  <img src={post.url} alt='' className='img post-image' />
                  {!post.media ? null : post.media.reddit_video ? (
                    <video preload='auto' controls className='post-video'>
                      <source
                        src={post.media.reddit_video.fallback_url}
                        type='video/mp4'
                      />
                    </video>
                  ) : null}
                  {post.url.includes("v.redd.it") ||
                  post.url.includes("i.redd.it") ? null : (
                    <div className='post-link'>
                      <a href={post.url} target='_blank' rel='noreferrer'>
                        {post.url}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className='comments-container'>{console.log(post)}</div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Posts;
