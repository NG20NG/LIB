//
import { ReactNode, useState } from "react";
import f from "./navBar.module.css";
import Link from "next/link";
import React from "react";

//
//
//
type FolderTypes = Readonly<{ children: ReactNode; text: string }>;
//
export const Folders = ({ children, text }: FolderTypes) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [current, setCurrent] = useState<string>("Buttons");

  const pathSvg = "/folder/arrow-ios-back.svg";
  const commonFileProps = {
    current,
    setCurrent,
  };
  return (
    <div className={f.folder}>
      <button
        className={f.folderButtonTitle}
        onClick={() => setToggle((e) => !e)}
      >
        <Svg path={pathSvg} toggle={toggle} />
        {text}
      </button>
      {toggle && (
        <div className={f.files}>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, commonFileProps)
              : child
          )}
        </div>
      )}
    </div>
  );
};
//
type FileTypes = {
  text: string;
  href: string;
  current?: string;
  setCurrent?: (e: string) => void;
};
//
export const Files = ({ text, href, current, setCurrent }: FileTypes) => {
  const ifSame = current === text;

  return (
    <Link href={href}>
      <button
        className={f.buttons}
        onClick={() => {
          setCurrent?.(text);
        }}
      >
        <div
          className={f.selected}
          style={{ backgroundColor: ifSame ? "#007FFF" : "#101418" }}
        />
        {text}
      </button>
    </Link>
  );
};
//
//
export const Svg = ({ path, toggle }: { path: string; toggle: boolean }) => {
  const rotate = toggle ? "270deg" : "180deg";
  return (
    <img
      style={{ width: "12px", margin: "0 3px", color: "white", rotate }}
      src={path}
      alt="icons"
    />
  );
};
