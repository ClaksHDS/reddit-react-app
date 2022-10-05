import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loading, NoMatch, Comments } from "../components";
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
                  <h5>{post.title}</h5>
                </div>
                <div className='content-post'>
                  <div className='votes-container'>
                    <button className='vote-btn' aria-label='cast a up vote'>
                      <BsArrowUpCircle />
                    </button>
                    <span>{post.ups}</span>
                    <button className='vote-btn' aria-label='cast a down vote'>
                      <BsArrowDownCircle />
                    </button>
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
              </div>
              <div className='comments-container'>
                <p>{post.subreddit_name_prefixed}</p>
                <button type='button' aria-label='show comments of the post'>
                  <FaRegCommentDots className='info-icon' />
                  <span>{post.num_comments} comments</span>
                </button>
                <div className='comments'></div>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Posts;
