import styled from "styled-components";

const Wrapper = styled.div`
  .search-form {
    width: 90vw;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-input {
    width: 100%;
    border: none;
    max-width: 500px;
    padding: 0.75rem;
    margin-top: 1rem;
    background: var(--primary-50);
    border-radius: var(--borderRadius);
  }
  .btn-search {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--grey-700);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
