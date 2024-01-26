//
//
//
//
//

import { LayoutBox } from "@/components/layouts/containerBox";
import { Button } from "./normalButton";

//
export const DisplayNormalButtons = () => {
  const a = `const a = 123`;

  return (
    <LayoutBox code={a}>
      <Button />
    </LayoutBox>
  );
};
