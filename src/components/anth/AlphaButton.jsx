import React, { useEffect } from "react";
import { Button } from "antd";

const AlphaButton = ({ label, color, click }) => {
  useEffect(() => {
    console.log("button updated to !");
  });
  return (
    <>
      <Button onClick={click} type={color}>
        {label}
      </Button>
    </>
  );
};

export default AlphaButton;
