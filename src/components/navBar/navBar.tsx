"use client";
import { Files, Folders } from "./components";
import n from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={n.navBar}>
      <Folders text="Components">
        <Files text="Buttons" href="/" />
      </Folders>
      <Folders text="Custom hooks">
        <Files text="Form" href="/hooks" />
      </Folders>
    </div>
  );
};

export default NavBar;
