import styled from "styled-components";

const Wrapper = styled.footer`
  height: 20vh;
  display: grid;
  padding-top: 1rem;
  padding-bottom: 0;
  place-items: center;
  margin: 0 auto;
  background: var(--primary-50);
  .icons-container ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    transition: var(--transition);
    a {
      color: var(--primary-500);
      padding: 0 0.5rem;
      font-size: 1.75rem;
    }
    a:hover {
      color: var(--primary-300);
    }
  }
  .copyright {
    display: grid;
    place-items: center;
  }
`;

export default Wrapper;
