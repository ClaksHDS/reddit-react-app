import React from "react";
import { toggleSidebar } from "../features/search/sidebarslice";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import Wrapper from "../assets/wrappers/Sidebar";

const CloseBtn = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <button type='button' className='toggle-btn' onClick={toggle}>
      <AiOutlineClose />
    </button>
  );
};

export default CloseBtn;
