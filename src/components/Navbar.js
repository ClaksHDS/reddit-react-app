import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebarSlice/sidebarSlice";
import Logo from "./Logo";
/* react icons */
import { GoThreeBars } from "react-icons/go";
/* styles */
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((store) => store.sidebar);

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <Logo />
        <button type='button' className='toggle-btn' onClick={toggle}>
          <GoThreeBars />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
