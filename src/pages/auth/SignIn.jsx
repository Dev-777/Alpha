import React from "react";
import style from "../../assets/scss/signIn.module.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={style.main}>
      <div className={style.content}>
        <Logo size={100} />
        <Form
          {...{
            labelCol: {
              span: 7,
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder={"email"} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder={"Password"} />
          </Form.Item>
          <Form.Item
            {...{
              wrapperCol: {
                offset: 7,
                span: 16,
              },
            }}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item
            {...{
              wrapperCol: {
                offset: 7,
                span: 16,
              },
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div className={style.signUp}>
          <Link to={"/"}>
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
