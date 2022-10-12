import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebarSlice/sidebarSlice";
import Logo from "./Logo";
/* react icons */
import { GoThreeBars } from "react-icons/go";
/* styles */
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <Logo />
        <button
          type='button'
          className='toggle-btn'
          aria-label='open sidebar'
          onClick={toggle}
        >
          <GoThreeBars />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
