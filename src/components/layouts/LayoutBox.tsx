"use client";
//
//
import { ReactNode, useState } from "react";
import c from "./LayoutBox.module.css";
import { CodeFormatter } from "./SyntaxHighlighter";
import copy from "clipboard-copy";

//
type LayoutBoxTypes = { children: ReactNode; code: string };
//
export const LayoutBox = ({ children, code }: LayoutBoxTypes) => {
  const [displayCode, setDisplayCode] = useState<boolean>(true);
  const toggleCode = () => setDisplayCode((e) => !e);

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
      <div className={c.codeContainer}>
        <button className={c.clickCopy} onClick={() => copy(code)}>
          copy
        </button>
        {displayCode ? <CodeFormatter code={code} /> : null}
      </div>
    </div>
  );
};
//
type LayoutCodeTypes = { children: ReactNode; code: string };
//
export const LayoutCode = (props: LayoutCodeTypes) => {
  const { children, code } = props;
  return (
    <div className={c.layoutCodeContainer}>
      <div className={c.textInfo}>{children}</div>
      <div className={c.codeFormatterContainer}>
        <CodeFormatter code={code} />
      </div>
      <div className={c.outputConsole}>
        <CodeFormatter
          code={`console.log(form): { email: "myGmail@gmail.com", password: "mypassword1234" }`}
        />
      </div>
    </div>
  );
};
