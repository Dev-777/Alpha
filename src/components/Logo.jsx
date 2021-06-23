import React from "react";
import { ReactComponent as logo } from "../assets/svgs/logo.svg";
import Icon from "@ant-design/icons";

const Logo = ({ size }) => {
  return (
    <div>
      <Icon style={{ fontSize: `${size}px` }} component={logo} />
    </div>
  );
};

export default Logo;
