import c from "@/lib/styles/components/layouts.module.css";
import { ReactNode } from "react";
//
//
//
type ColumnTypes = { children: ReactNode; gap?: number };
//
export const Column = ({ children, gap }: ColumnTypes) => {
  const style = { gap };
  return (
    <div style={{ ...style }} className={c.column}>
      {children}
    </div>
  );
};
//
//
type RowTypes = { children: ReactNode; gap?: number };
//
export const Row = ({ children, gap }: RowTypes) => {
  const style = { gap };
  return (
    <div style={{ ...style }} className={c.row}>
      {children}
    </div>
  );
};
