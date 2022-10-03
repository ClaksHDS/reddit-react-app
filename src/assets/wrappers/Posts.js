import styled from "styled-components";

const Wrapper = styled.ul`
  width: 90vw;
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding-top: 2rem;

  .post-wrapper {
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
    color: var(--grey-600);
    margin-right: 0.55rem;
    text-align: center;
  }
  .post-info span {
    color: var(--grey-800);
  }
  .post-title {
    margin: 0 auto;

    h4 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.25rem;
      line-height: 1.3;
    }
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
    padding-top: 2rem;
  }
  .post-link a {
    overflow-wrap: break-word;
    color: var(--primary-500);
  }
  .post-link a:hover {
    color: var(--primary-300);
  }

  @media (min-width: 990px) {
    max-width: 800px;
    .post-title,
    .post-content {
      display: grid;
      text-align: center;
      justify-content: center;
    }
  }
`;

export default Wrapper;
