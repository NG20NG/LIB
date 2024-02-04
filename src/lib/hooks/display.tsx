"use client";
import { LayoutCode } from "@/components/layouts/LayoutBox";
import React from "react";

const Form = () => {
  const a = `export const myForm = () => {
  const { form, setForm } = useForm({
    email: "",
    password: "",
  });
  console.log(form);
  return (
    <>
      <input onChange={(e) => setForm("email", e)} />
      <input onChange={(e) => setForm("password", e)} />
    </>
  );
};`;
  return (
    <LayoutCode code={a}>
      useForm is for bla bla bla form stuff things
    </LayoutCode>
  );
};

export default Form;
