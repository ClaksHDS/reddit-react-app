import img from "../assets/images/error.svg";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='page not found' />
        <h3>Uh oh...</h3>
        <p>We can't find the page you're looking for.</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
