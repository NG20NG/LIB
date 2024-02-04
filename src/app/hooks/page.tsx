import { Column } from "@/lib/layouts/layouts";
import b from "./hooks.module.css";
import { LoadingButtons, NormalButtons } from "@/lib/buttons/display";
import Form from "@/lib/hooks/display";

const Hooks = () => {
  return (
    <div className={b.hooksContainer}>
      <div className={b.components}>
        <Column gap={30}>
          <h1>Hooks</h1>
          <Form />
        </Column>
      </div>
      <div className={b.hooksFooter}></div>
    </div>
  );
};
export default Hooks;
