"use client";
//
//
//
//
//

import { LayoutBox } from "@/components/layouts/LayoutBox";
import { Button } from "./Button";
import { Column, Row } from "../layouts/layouts";
import { useEffect, useState } from "react";

//
export const NormalButtons = () => {
  const a = `<Column gap={10}>
  <Row gap={10}>
    <Button>Transparent</Button>
    <Button variante="text">Text</Button>
    <Button variante="filled">Filled</Button>
    <Button variante="outlined">Outlined</Button>
  </Row>
  <Row gap={10}>
    <Button disabled>Transparent</Button>
    <Button variante="text" disabled>Text</Button>
    <Button variante="filled" disabled>Filled</Button>
    <Button variante="outlined" disabled>Outlined</Button>
  </Row>
</Column>;
`;

  return (
    <LayoutBox code={a}>
      <Column gap={10}>
        <Row gap={10}>
          <Button>Transparent</Button>
          <Button variante="text">Text</Button>
          <Button variante="filled">Filled</Button>
          <Button variante="outlined">Outlined</Button>
        </Row>
        <Row gap={10}>
          <Button disabled>Transparent</Button>
          <Button variante="text" disabled>
            Text
          </Button>
          <Button variante="filled" disabled>
            Filled
          </Button>
          <Button variante="outlined" disabled>
            Outlined
          </Button>
        </Row>
      </Column>
    </LayoutBox>
  );
};
//
export const LoadingButtons = () => {
  const a = `<Row gap={10}>
  <Button loading={isLoading}>Submite</Button>
  <Button variante="text" loading={isLoading}>Submite</Button>
  <Button variante="filled" loading={isLoading}>Submite</Button>
  <Button variante="outlined" loading={isLoading}>Submite</Button>
</Row>`;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);
  return (
    <LayoutBox code={a}>
      <Row gap={10}>
        <Button loading={isLoading} onClick={() => setIsLoading((e) => !e)}>
          Submite
        </Button>
        <Button
          variante="text"
          loading={isLoading}
          onClick={() => setIsLoading((e) => !e)}
        >
          Submite
        </Button>
        <Button
          variante="filled"
          loading={isLoading}
          onClick={() => setIsLoading((e) => !e)}
        >
          Submite
        </Button>
        <Button
          variante="outlined"
          loading={isLoading}
          onClick={() => setIsLoading((e) => !e)}
        >
          Submite
        </Button>
      </Row>
    </LayoutBox>
  );
};
//
//
//
//
export const ToggleButton = () => {
  return <div></div>;
};
export const SwitchButton = () => {
  return <div></div>;
};
