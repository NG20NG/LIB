"use client";
import b from "@/lib/styles/buttons/normalButtons.module.css";
import d from "@/lib/styles/buttons/DisabledButtons.module.css";
import { ButtonTypes } from "./types";
import { useState } from "react";
import { LoadingIcon } from "@/lib/icons/loading/loading";

//
//
const classNames = {
  transparent: b.transparentButton,
  text: b.textButton,
  filled: b.filledButton,
  outlined: b.outlinedButton,
} as const;
//
const classNamesDisabled = {
  transparent: d.transparentButtonDisabled,
  text: d.textButtonDisabled,
  filled: d.filledButtonDisabled,
  outlined: d.outlinedButtonDisabled,
} as const;
//
const ButtonSize = {
  small: [9, 20],
  medium: [11, 25],
  large: [13, 30],
} as const;
//

//
export const Button = (props: ButtonTypes) => {
  let { children, variante, size, className } = props;
  let { disabled, loading, onClick } = props;
  if (!variante) variante = "transparent";
  if (!size) size = "small";
  if (!disabled) disabled = false;
  if (!loading) loading = false;
  if (loading) disabled = true;
  const padding = `${ButtonSize[size][0]}px ${ButtonSize[size][1]}px`;
  return (
    <button
      style={{ padding }}
      className={`${classNames[variante]} ${className} ${
        disabled ? classNamesDisabled[variante] : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {
        <div
          style={{
            width: loading ? "15px" : 0,
            marginRight: loading ? "7px" : 0,
            opacity: loading ? 1 : 0,
          }}
          className={b.loadingIcon}
        >
          <LoadingIcon />
        </div>
      }
      {children}
    </button>
  );
};
//
//
//
