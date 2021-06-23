import React from "react";
import { Button } from "antd";

const AlphaButton = ({ label, color, click }) => {
  return (
    <>
      <Button onClick={click} type={color}>
        {label}
      </Button>
    </>
  );
};

export default AlphaButton;
