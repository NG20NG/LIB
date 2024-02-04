import { ChangeEvent, useState } from "react";
// Define the type for the form state
interface FormState {
  [key: string]: string;
}
//
type A = ChangeEvent<HTMLInputElement>;
// Define the useForm hook
export const useForm = <T extends FormState>(obj: T) => {
  const [form, setFormState] = useState<T>(obj);
  const setForm: (key: keyof T, e: A) => void = (key, e) => {
    setFormState((prev) => ({ ...prev, [key]: e.target.value }));
  };
  return { form, setForm } as const;
};
