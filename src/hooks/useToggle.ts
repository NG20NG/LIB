// //
// //
// import { useState } from "react";
// //
// //
// //
// //
// export const useToggle = <T>(initialState: T) => {
//   const [stateObj, setStateObj] = useState<T>(initialState);

//   const setUpdate = (key: string, value: boolean) => {
//     setStateObj((prevState) => ({ ...prevState, [key]: value }));
//   };

//   return [stateObj, setUpdate] as const;
// };
// //
// //
// //
// //
// export const useToggleId = () => {
//   const [current, setCurrentState] = useState<string>("none");

//   const detectCurrent = (key: string) => {
//     return current === key;
//   };

//   const setCurrent = (newCurrent: string) => {
//     setCurrentState(newCurrent);
//   };

//   return { current, detectCurrent, setCurrent };
// };
