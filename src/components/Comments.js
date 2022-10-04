import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { getComments } from "../features/commentsSlice/commentsSlice";

const Comments = () => {
  /* const { comments, loadingComments, errorComments } = useSelector(
    (store) => store.comments
  ); */
  const { posts } = useSelector((store) => store.posts);
  const permalink = posts.map((post) => post.permalink);
  // new code
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const showComments = async () => {
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      const json = await response.json();
      setComments(json[1].data.children.map((comment) => comment.data));
    };
    showComments();
  }, [permalink]);

  /*  useEffect(() => {
    getComments();
  }, [permalink]); */

  return (
    <ul>
      {comments.slice(0, 15).map((comment) => {
        return (
          <li key={comment.id}>
            <p>u/ {comment.author}</p>
            <ReactMarkdown>{comment.body}</ReactMarkdown>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
