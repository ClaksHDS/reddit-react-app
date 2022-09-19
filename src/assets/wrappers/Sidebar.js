import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 990px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 0;
    transition: var(--transiton);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .toggle-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-700);
    cursor: pointer;
  }
  .subreddits-container {
    border-radius: var(--borderRadius);
  }
  .subreddits-container:hover {
  }
  .icon {
    font-size: 1.5rem;
    display: grid;
    place-items: center;
    color: var(--primary-500);
  }
`;

export default Wrapper;
