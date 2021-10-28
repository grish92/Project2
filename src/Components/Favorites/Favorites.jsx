import React from "react";
import { Card, Layout } from "antd";
import { currencySign } from "../utils";
const { Footer, Content } = Layout;

const gridStyle = {
  width: "25%",
  textAlign: "center",
};
export const Favorites = (props) => {
  console.log(props);
  return (
    <Layout>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          {props.favorites.map((apartment) => {
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

                  <p>{apartment.city}</p>
                  <p>{apartment.district}</p>
                  <p>{currencySign(apartment.price)}</p>
                </Card>
              </Card.Grid>
            );
          })}
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Armenian First Rent Company . All Rights Reserved. © 2021
      </Footer>
    </Layout>
  );
};
