import React from "react";
import style from "../../assets/scss/signUp.module.scss";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { useHistory } from "react-router";

const SignUp = () => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);
    history.push("/signUpSecond");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className={style.main}>
        <div className={style.content}>
          <Logo size={100} />
          <Form
            {...{
              labelCol: {
                span: 9,
              },
              wrapperCol: {
                span: 16,
              },
            }}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="FirstName"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input placeholder={"First Name"} />
            </Form.Item>
            <Form.Item
              label="LastName"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input placeholder={"Last Name"} />
            </Form.Item>
            <Form.Item
              label="Emil"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input placeholder={"Email"} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password placeholder={"Password"} />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
              ]}
            >
              <Input.Password placeholder={"Confirm Password"} />
            </Form.Item>
            <Form.Item
              {...{
                wrapperCol: {
                  offset: 9,
                  span: 16,
                },
              }}
            >
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <div className={style.signIn}>
            <Link to={"/signIn"}>
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
