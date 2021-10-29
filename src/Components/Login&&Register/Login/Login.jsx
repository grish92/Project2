import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "../../../style.css";
import { useState } from "react";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newLogin = () => {
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.accessToken && res.refreshToken) {
          props.setToken({
            accessToken: res.accessToken,
            refreshToken: res.refreshToken,
          });

          props.SetUser(res.user);
        } else {
          alert(res.message);
        }
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="login_page_logo">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={newLogin}
            >
              <Link to="/home">Log in</Link>
            </Button>
            {" Or "}
            <Link to="/register"> register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
