import React, { useState } from "react";
/* react icons */
import { BsArrowUpCircle } from "react-icons/bs";
/* styles */
import Wrapper from "../assets/wrappers/ScrollButton";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  //set visible to true when we scroll down to 300px
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // function to scroll to the top and triggered the change of visible
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Wrapper>
      <BsArrowUpCircle
        onClick={scrollToTop}
        className='scroll-btn'
        style={{ display: visible ? "inline" : "none" }}
      />
    </Wrapper>
  );
};

export default ScrollButton;
