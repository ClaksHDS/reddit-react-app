import styled from "styled-components";

const Wrapper = styled.div`
  .scroll-btn {
    position: fixed;
    width: 100%;
    left: 45%;
    bottom: 40px;
    height: 2.5rem;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: #e12f17;
  }
  @media (min-width: 990px) {
    .scroll-btn {
      height: 4rem;
      left: 30%;
    }
  }
`;

export default Wrapper;
