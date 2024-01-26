"use client";
//
//
//
//
import { ReactNode, useState } from "react";
import c from "./containerBox.module.css";
import { CodeFormatter } from "./components";

//
type LayoutBoxTypes = { children: ReactNode; code: string };
//
export const LayoutBox = ({ children, code }: LayoutBoxTypes) => {
  const [displayCode, setDisplayCode] = useState<boolean>(true);
  const toggleCode = () => {
    setDisplayCode((e) => !e);
  };
  return (
    <div className={c.layoutBoxContainer}>
      <div className={c.styledComponents}>{children}</div>
      <div className={c.navBar}>
        <button className={c.commandButtons} onClick={toggleCode}>
          Code
        </button>
        <button className={c.commandButtons}>Copy</button>
        <button className={c.commandButtons}>1</button>
      </div>
      <div>{displayCode ? <CodeFormatter code={code} /> : null}</div>
    </div>
  );
};
