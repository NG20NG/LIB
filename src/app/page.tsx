import { Column } from "@/lib/layouts/layouts";
import b from "./page.module.css";
import { LoadingButtons, NormalButtons } from "@/lib/buttons/display";

const Buttons = () => {
  return (
    <div className={b.buttonsContainer}>
      <div className={b.components}>
        <Column gap={30}>
          <h1>Buttons</h1>
          <NormalButtons />
          <LoadingButtons />
        </Column>
      </div>
      <div className={b.buttonsFooter}></div>
    </div>
  );
};
export default Buttons;
