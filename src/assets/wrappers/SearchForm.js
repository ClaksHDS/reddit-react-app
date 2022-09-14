import styled from "styled-components";

const Wrapper = styled.div`
  .search-form {
    width: 90vw;
    max-width: var(--maxWidth);
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
  }
  .form-input {
    width: 100%;
    border: none;
    max-width: 600px;
    padding: 1rem;
    margin-top: 1rem;
  }
  .btn-search {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--grey-600);
    font-size: 1.5rem;
  }
`;

export default Wrapper;
