import styled from "styled-components";

const Wrapper = styled.aside`
  .subreddits-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 1rem;
    background: var(--primary-50);
  }
  ul {
    margin: 0.25rem auto;
    padding: 0.75rem 2rem;
    height: 100%;
    width: 80vw;
    border-radius: var(--border-radius);
  }
  .subreddit {
    display: flex;
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
    cursor: pointer;
    background: transparent;
    border: transparent;
    padding: 0.215rem 0.75rem;
    transition: var(--transition);
    text-transform: capitalize;
    display: inline-block;
    color: var(--grey-900);
    font-size: 0.55rem;
  }
  .subreddit-link:hover {
    color: var(--primary-500);
  }
  @media (min-width: 990px) {
    .subreddits-container {
      max-width: 300px;
      margin-right: 2.75rem;
      margin-top: 2rem;
    }
  }
`;

export default Wrapper;
