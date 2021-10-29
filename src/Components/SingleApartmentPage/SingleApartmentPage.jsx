import { Carousel, Layout, Table } from "antd";
import React from "react";
import { NavbarContainer } from "../Navbar/NavbarContainer";

const { Footer, Content } = Layout;
let onChange = (a, b, c) => {
  console.log(a, b, c);
};

const contentStyle = {
  height: "400px",
  width: "1200px",
  margin: "auto",
  marginBottom: "20px",
  marginTop: "20px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const SingleApartmentPage = (props) => {
  console.log(props);
  const apartmentId = props.match.params.id;
  const arr = props.apartments.filter(
    (apartment) => apartment.id === parseInt(apartmentId)
  );
  console.log(arr);
  return (
    <Layout>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <NavbarContainer/>
          <Carousel afterChange={onChange}>
            {arr.map((e) => (
              <div key={e.id}>
                <img src={e.src} alt="" style={contentStyle} />
              </div>
            ))}
          </Carousel>
          <Table columns={props.columns} dataSource={arr} />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Armenian First Rent Company . All Rights Reserved. © 2021
      </Footer>
    </Layout>
  );
};
