import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--primary-50);
  border-radius: var(--borderRadius);
  color: var(--textColor);
  padding: 0.05rem 1rem;
  margin: 1rem;
  .comment-container {
    background: var(--white);
    border-radius: var(--borderRadius);
  }

  h5 {
    padding-top: 1rem;
    padding-left: 1rem;
    color: var(--grey-700);
  }
  .icon {
    margin-right: 0.55rem;
  }
  .posted {
    padding-left: 1rem;
    padding-bottom: 0;
    color: var(--grey-600);
    font-style: italic;
  }

  .comment {
    padding-left: 1rem;
    padding-bottom: 1rem;
    color: var(--grey-8s00);
  }
`;
export default Wrapper;
