import styled from "styled-components";

const Wrapper = styled.aside`
  width: 90vw;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding-top: 2rem;
  .post-wrapper {
    height: 100%;
    padding: 1rem;
    border: 2px solid var(--primary-100);
    border-radius: var(--borderRadius);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border-bottom: 2px solid var(--primary-50);
  }
  .info-icon {
    color: var(--grey-800);
    font-size: 1.55rem;
    margin-right: 0.6rem;
    text-align: center;
    color: var(--grey-800);
  }
  .post-info span {
    color: var(--grey-700);
  }
  .post-title {
    margin: 0 auto;
    h3 {
      font-size: 1.25rem;
      line-height: 1.3;
    }
  }
  .content-post {
    display: grid;
    grid-template-columns: 10% 90%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .post-image {
    max-width: 600px;
    border-radius: var(--borderRadius);
  }
  .post-video {
    height: 100%;
    width: 100%;
    max-width: 600px;
    object-fit: contain;
  }
  .post-link {
    max-width: 600px;
  }
  .post-link a {
    overflow-wrap: break-word;
    color: var(--primary-500);
  }
  .post-link a:hover {
    color: var(--primary-300);
  }
  .votes-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      margin-top: 0.55rem;
      margin-bottom: 0.55rem;
    }
  }
  .vote-btn {
    border: transparent;
    background: transparent;
    color: var(--grey-700);
    font-size: 1.55rem;
  }

  .comments-container {
    border-top: 2px solid var(--primary-50);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    padding-top: 1rem;
    padding-bottom: 0;
    button {
      border: transparent;
      background: transparent;
      color: var(--grey-800);
    }
    button:hover {
      color: var(--primary-300);
    }
    span {
      color: var(--primary-500);
      cursor: pointer;
    }
    span:hover {
      color: var(--primary-400);
    }
  }
  @media (min-width: 990px) {
    max-width: 800px;
    .post-title,
    .post-content {
      display: grid;
      text-align: left;
    }
  }
`;

export default Wrapper;
