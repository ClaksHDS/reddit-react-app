import React, { useState, useEffect } from "react";
/* react icons */
import { FaRedditAlien } from "react-icons/fa";
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
            <div key={comment.id} className='comment-container'>
              <header>
                <h5>
                  <FaRedditAlien className='icon' />
                  {comment.author}
                </h5>
                <p className='posted'>
                  posted{" "}
                  {Math.round(
                    (new Date().getTime() / 1000 - comment.created_utc) / 3600
                  )}{" "}
                  hours ago
                </p>
              </header>
              <p className='comment'>{comment.body}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Comments;
