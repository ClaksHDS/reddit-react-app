import styled from "styled-components";

const Wrapper = styled.aside`
  .subreddits-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
  }
  .subreddit {
    display: flex;
    font-size: 0.02rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  .subreddit-icon {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 100%;
    vertical-align: baseline;
    margin-right: 1rem;
  }
  .subreddit-link {
    color: var(--grey-900);
  }
  .subreddit-link:hover {
    color: var(--primary-500);
  }
`;

export default Wrapper;
