"use client";
import { Files, Folders } from "./components";
import n from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={n.navBar}>
      <Folders text="Components">
        <Files text="Buttons" href="/" />
        <Files text="Group Buttons" href="/buttons" />
      </Folders>
    </div>
  );
};

export default NavBar;
