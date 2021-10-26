import { Link } from "react-router-dom";

import "../../style.css";
import apartament_logo from "../../images/apartament_logo.png";

import {
  UserOutlined,
  LogoutOutlined,
  MailOutlined,
  UnlockOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Layout, message, Space } from "antd";

export const NavBar = (props) => {
  console.log(props);
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Custumer
      </Menu.Item>

      <Menu.Item key="2" icon={<MailOutlined />}>
        Change Email
      </Menu.Item>
      <Menu.Item key="3" icon={<UnlockOutlined />}>
        Change password
      </Menu.Item>
      <Menu.Item key="4" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Layout className="layout">
        <Menu className="menu" theme="dark" mode="horizontal">
          <Menu.Item style={{ backgroundColor: "transparent" }}>
            <img
              style={{ width: "70px", height: "45px" }}
              src={apartament_logo}
              alt=""
            />
          </Menu.Item>
          {props.menuItems.map((menu) => (
            <Menu.Item key={menu.id}>
              <Link to={`/${menu.to}`}>{menu.label}</Link>
            </Menu.Item>
          ))}
          <Menu.Item key="myprofile" style={{ marginLeft: "auto" }}>
            <Link to="/myprofile">
              <Space wrap>
                <Dropdown.Button
                  overlay={menu}
                  placement="bottomCenter"
                  icon={<UserOutlined />}
                >
                  My profile
                </Dropdown.Button>
              </Space>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout>
    </>
  );
};
