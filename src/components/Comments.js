import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../features/commentsSlice/commentsSlice";

/* styles */
import Wrapper from "../assets/wrappers/Comments";

const Comments = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((store) => store.posts);
  const permalink = posts.map((post) => post.permalink);
  const { comments } = useSelector((store) => store.comments);

  /* useEffect(() => {
    dispatch(getComments(permalink));
  }, [permalink]); */

  return (
    <Wrapper>
      <div>
        <p>hi bob</p>
        {/*<ul>
          {comments.slice(0, 15).map((comment) => {
            return (
              <li key={comment.id}>
                <h5>u/ {comment.author}</h5>
                <ReactMarkdown>{comment.body}</ReactMarkdown>
              </li>
            );
          })}
        </ul> */}
      </div>
    </Wrapper>
  );
};

export default Comments;
