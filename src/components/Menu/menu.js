import React, { useState } from "react";
import Navbar from "./Navbar/navbar.js";
import Sidebar from "./Sidebar/sidebar.js";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};
export default Menu;
