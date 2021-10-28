import React from "react";
import { Layout, Form, Button, Card } from "antd";

import { currencySign } from "../utils";
const { Footer, Content } = Layout;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const UserAnnouncement = (props) => {
  console.log(props);
  const gridStyle = {
    width: "25%",
    textAlign: "center",
  };

  return (
    <Layout>
      <Layout>
        <Content style={{ padding: "0 50px" }}></Content>
      </Layout>
      <div>
        {props.myAnnouncements.map((apartment) => {
          return (
            <Card.Grid hoverable={false} style={gridStyle} key={apartment.id}>
              <Card
                title={"APARTMENT CODE - " + apartment.id}
                style={{ width: 320 }}
              >
                <img
                  style={{ width: 270, height: 260 }}
                  alt={apartment.location}
                  src={apartment.src}
                />
                City:{" "}
                <strong>
                  {" "}
                  <p>{apartment.city}</p>
                </strong>
                District:
                <strong>
                  {" "}
                  <p>{apartment.district}</p>
                </strong>
                Rooms:{" "}
                <strong>
                  {" "}
                  <p>{apartment.rooms}</p>
                </strong>
                Floor Size:
                <strong>
                  {" "}
                  <p>{apartment.floorSize}</p>
                </strong>
                Introduction:
                <strong>
                  {" "}
                  <p>{apartment.introduction}</p>
                </strong>
                <strong>
                  {" "}
                  <p>{currencySign(apartment.price)}</p>
                </strong>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => props.deleteAnnouncement(apartment.id)}
                  >
                    Delete
                  </Button>
                </Form.Item>
              </Card>
            </Card.Grid>
          );
        })}
      </div>
      <Footer style={{ textAlign: "center" }}>
        Armenian First Rent Company . All Rights Reserved. © 2021
      </Footer>
    </Layout>
  );
};
