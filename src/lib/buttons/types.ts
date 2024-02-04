//
//
//

import { ReactNode } from "react";
//
//
//
export type VarianteType = "transparent" | "text" | "filled" | "outlined";
//
export type ButtonTypes = {
  children: ReactNode;
  variante?: VarianteType;
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};
