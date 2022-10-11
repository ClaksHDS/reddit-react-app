import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loading, NoMatch, Comments } from "../components";
import { getPosts, getSubredditPosts } from "../features/postsSlice/postsSlice";

/* react icons */
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import {
  FaUserAstronaut,
  FaRegCommentDots,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";
/* styles */
import Wrapper from "../assets/wrappers/Posts";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, hasError } = useSelector((store) => store.posts);

  // allow the user to show the comments
  const [displayComments, setDisplayComments] = useState({ display: "none" });

  const showComments = () => {
    displayComments.display === "none"
      ? setDisplayComments({ display: "block" })
      : setDisplayComments({ display: "none" });
  };

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
                      <FaLongArrowAltUp />
                    </button>
                    <span>{post.ups}</span>
                    <button className='vote-btn' aria-label='cast a down vote'>
                      <FaLongArrowAltDown />
                    </button>
                  </div>
                  <div className='post-content'>
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
                        <a
                          href={post.url}
                          target='_blank'
                          rel='noreferrer'
                          title='check the post'
                          aria-label='read more about this post'
                        >
                          {post.url}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='comments-container'>
                <button
                  type='button'
                  className='btn-post'
                  aria-label='see posts attached to this subreddit'
                  onClick={() => dispatch(getSubredditPosts(post.subreddit))}
                >
                  <span>{post.subreddit_name_prefixed}</span>
                </button>

                <button
                  type='button'
                  className='btn-post'
                  aria-label='show comments of the post'
                  onClick={showComments}
                >
                  <FaRegCommentDots className='info-icon' />
                  <span>{post.num_comments} comments</span>
                </button>
              </div>

              <div style={displayComments} className='comments'>
                <Comments permalink={post.permalink} />
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Posts;
