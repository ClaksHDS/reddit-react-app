import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

/* styles */
import Wrapper from "../assets/wrappers/Comments";

const Comments = (props) => {
  const { permalink } = props;
  const [loadComments, setLoadComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const response = await fetch(`https://www.reddit.com${permalink}.json`);
      const json = await response.json();
      setLoadComments(json[1].data.children.map((comment) => comment.data));
    };
    getComments();
  }, [permalink]);

  return (
    <Wrapper>
      <div>
        {loadComments.map((comment) => {
          return (
            <div key={comment.id}>
              <h5>{comment.author}</h5>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Comments;
