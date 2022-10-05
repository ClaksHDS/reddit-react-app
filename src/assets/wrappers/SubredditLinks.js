import styled from "styled-components";

const Wrapper = styled.aside`
  .subreddits-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.15rem 1rem;
    background: var(--primary-50);
    border-radius: var(--border-radius);
    width: 350px;
    margin: 0 auto;
  }
  ul {
    margin: 1rem 2rem;
  }
  .subreddit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  .subreddit-icon {
    width: 1.55rem;
    height: 1.55rem;
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
