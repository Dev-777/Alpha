import React, { useMemo } from "react";
import { Button } from "antd";

const TestTwo = ({ click, color, label }) => {
  console.log("rendered 44");
  useMemo(() => console.log("oop"), [click]);
  return (
    <>
      <Button onClick={click} type={color}>
        {label}
      </Button>
    </>
  );
};

export default TestTwo;
