import styled from "styled-components";

const Wrapper = styled.div`
  .card {
    box-shadow: var(--shadow-1);
    border: 1px solid var(--grey-100);
    border-radius: var(--borderRadius);
    transition: var(--transition);
    color: var(--textColor);
    width: 90vw;
    max-width: var(--maxWidth);
    margin: 2rem auto;
    padding: 1rem;
    display: grid;
    justify-content: center;
    justify-items: center;
  }
  .card:hover {
    box-shadow: var(--shadow-3);
  }
  .error {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 1.75rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;
export default Wrapper;
