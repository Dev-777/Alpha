import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const AlphaNav = () => {
  const history = useHistory();
  const { SubMenu } = Menu;
  const handleClick = (e) => {
    console.log("click", e);
  };

  const navObj = [
    ["Home"],
    ["Profile", "Edit", "Add Photo"],
    ["Wallpapers"],
    ["Games", "X&O"],
    ["Other", "ToDoList", "Calculator"],
  ];

  return (
    <>
      <Menu onClick={handleClick} theme="dark" mode="horizontal">
        {navObj.map((_, ind) => (
          <SubMenu key={`sub${_[0]}`} title={_[0]}>
            {_.slice(1).map((item, i) => (
              <Menu.Item key={`sub${_[0]}${i}`}>{item}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
};

export default AlphaNav;
