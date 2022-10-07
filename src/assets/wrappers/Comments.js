import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--primary-50);
  border-radius: var(--borderRadius);
  color: var(--textColor);
  ul {
    padding: 0.35rem 1.25rem 1.25rem;
    height: 100%;
  }
  ul li {
    overflow-wrap: break-word;
    border-bottom: 2px solid var(--primary-50);
  }
  ul li h5 {
    margin-bottom: 0;
    color: var(--grey-800);
    font-weight: 500;
  }
  ul li p {
    margin-top: 0;
  }
`;
export default Wrapper;
