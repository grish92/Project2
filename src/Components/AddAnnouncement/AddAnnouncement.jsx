import React from "react";
import { Form, Input, Button, Layout } from "antd";
import { NavbarContainer } from "../Navbar/NavbarContainer";

const { Footer, Content } = Layout;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const AddAnnouncement = (props) => {
  console.log(props);
  let addApartment = () => {
    props.addAnnouncement();
  };
  let changeCity = (e) => {
    let body = e.target.value;
    props.onChangeNewCity(body);
  };
  let changeDistrict = (e) => {
    let body = e.target.value;
    props.onChangeNewDistrict(body);
  };
  let changeRooms = (e) => {
    let body = e.target.value;
    props.onChangeNewRooms(body);
  };
  let changePrice = (e) => {
    let body = e.target.value;
    props.onChangeNewPrice(body);
  };
  let changeIntroduction = (e) => {
    let body = e.target.value;
    props.onChangeNewIntroduction(body);
  };
  let changeFloorSize = (e) => {
    let body = e.target.value;
    props.onChangeNewFloorSize(body);
  };
  return (
    <Layout>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <NavbarContainer/>
          <Form
            {...layout}
            name="nest-messages"
            style={{
              textAlign: "center",
              padding: "50px",
              marginRight: "250px",
            }}
          >
            <Form.Item
              label="City"
              rules={[
                {
                  type: "text",
                },
              ]}
            >
              <Input onChange={changeCity} />
            </Form.Item>
            <Form.Item
              label="District"
              rules={[
                {
                  type: "text",
                },
              ]}
            >
              <Input onChange={changeDistrict} />
            </Form.Item>
            <Form.Item
              label="Price"
              rules={[
                {
                  type: "number",
                },
              ]}
            >
              <Input onChange={changePrice} />
            </Form.Item>
            <Form.Item
              label="Rooms"
              rules={[
                {
                  type: "number",
                },
              ]}
            >
              <Input onChange={changeRooms} />
            </Form.Item>
            <Form.Item
              label="FloorSize"
              rules={[
                {
                  type: "number",
                },
              ]}
            >
              <Input onChange={changeFloorSize} />
            </Form.Item>
            <Form.Item label="Introduction">
              <Input.TextArea onChange={changeIntroduction} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit" onClick={addApartment}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Armenian First Rent Company . All Rights Reserved. © 2021
      </Footer>
    </Layout>
  );
};
