import { Button, Layout, Modal, Menu } from "antd";
import React from "react";
import { useState } from "react";
import { Login } from "./Login/Login";
import "../../style.css";
import apartament_logo from "../../images/apartament_logo.png";
import { ApartmentsContainer } from "../Content/Apartments/ApartmentsContainer";
// import { ApartmentsContainer } from "../Content/Apartments/ApartmentsContainer";
// const { Footer, Content } = Layout;

const { Footer, Content } = Layout;

export const LoginRegister = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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

          <Menu.Item>
            <Button type="primary" onClick={showModal}>
              LogIn
            </Button>
            <Modal
              className="modal"
              title="LogIn"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Login />
            </Modal>
          </Menu.Item>
        </Menu>
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <ApartmentsContainer />
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Armenian First Rent Company . All Rights Reserved. © 2021
        </Footer>
      </Layout>
    </>
  );
};
