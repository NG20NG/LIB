import b from "./page.module.css";
import { DisplayNormalButtons } from "@/styledComponents/buttons/display";

const Buttons = () => {
  return (
    <div className={b.buttonsContainer}>
      <div className={b.components}>
        <DisplayNormalButtons />
      </div>
      <div className={b.buttonsFooter}>123</div>
    </div>
  );
};
export default Buttons;
