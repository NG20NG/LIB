import c from "./SyntaxHighlighter.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeFormatter = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter
      className={c.styleCode}
      language="javascript"
      style={vscDarkPlus}
    >
      {code}
    </SyntaxHighlighter>
  );
};
