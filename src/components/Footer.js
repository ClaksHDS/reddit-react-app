import React from "react";
import { Logo } from "../components";
/* import react icons */
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
/* styles */
import Wrapper from "../assets/wrappers/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className='icons-container'>
          <ul>
            <li>
              <a href='https://github.com/ClaksHDS' target='_blank'>
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/clarisse-huet-9b931a19b/'
                target='_blank'
              >
                <AiOutlineLinkedin />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/mediacolorpalette/'
                target='_blank'
              >
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className='copyright'>
          <p>&copy; copyright ClaksHDS - {new Date().getFullYear()}</p>
        </div>
      </footer>
    </Wrapper>
  );
};
export default Footer;