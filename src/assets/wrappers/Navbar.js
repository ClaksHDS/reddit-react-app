import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .toggle-btn:hover {
    color: var(--primary-400);
  }
  @media (min-width: 990px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .toggle-btn {
      display: none;
    }
  }
`;

export default Wrapper;
