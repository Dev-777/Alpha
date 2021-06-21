import React from "react";
import { Input } from "antd";

const AlphaInput = ({ size, placeholder, prefix, change }) => {
  return (
    <>
      <Input
        size={size}
        placeholder={placeholder}
        prefix={prefix}
        onChange={change}
      />
    </>
  );
};

export default AlphaInput;
