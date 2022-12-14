import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/sidebarSlice/sidebarSlice";
import Logo from "./Logo";
import { Subreddits } from "../components";
import { Link } from "react-router-dom";
/* react icons */
import { AiOutlineClose } from "react-icons/ai";
import { FcReddit } from "react-icons/fc";
/* styles */
import Wrapper from "../assets/wrappers/Sidebar";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { isSidebarOpen } = useSelector((store) => store.sidebar);

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className='sidebar-header'>
          <Logo className='logo' alt='reddit stay curious logo' />
          <button
            className='close-btn'
            type='button'
            aria-label='close sidebar'
            onClick={toggle}
          >
            <AiOutlineClose />
          </button>
        </div>
        <FcReddit className='reddit-icon' />
        <Link to='/' onClick={toggle}>
          <Subreddits />
        </Link>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
