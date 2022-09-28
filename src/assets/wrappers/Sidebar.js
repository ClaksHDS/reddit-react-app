import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  h3 {
    color: var(--primary-500);
    text-transform: capitalize;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-600);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--primary-300);
  }
  .reddit-icon {
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 99;
  }

  @media (min-width: 990px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Wrapper;
