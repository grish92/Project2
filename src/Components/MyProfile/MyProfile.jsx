import { Avatar, Card, Layout } from "antd";
import { UserOutlined, MailTwoTone, PhoneTwoTone } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useState } from "react";
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
export const MyProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const activateMode = () => {
    setEditMode(true);
  };
  const deActivateMode = () => {
    setEditMode(false);
  };
  return (
    <Layout>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <NavbarContainer/>
          <div style={{ display: "flex", margin: "auto" }}>
            <Avatar
              shape="square"
              size={200}
              icon={<UserOutlined />}
              style={{ margin: "50px" }}
            />

            <div>
              {editMode ? (
                <Form {...layout} name="nest-messages">
                  <Form.Item
                    label="Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Surname"
                    rules={[
                      {
                        type: "text",
                      },
                    ]}
                  >
                    <Input
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[
                      {
                        type: "email",
                      },
                    ]}
                  >
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Phone Number"
                    rules={[
                      {
                        type: "number",
                      },
                    ]}
                  >
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    rules={[
                      {
                        type: "number",
                        min: 0,
                        max: 99,
                      },
                    ]}
                  >
                    <Input
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Form.Item>
                </Form>
              ) : (
                <Card title="USER" style={{ width: 500, margin: "auto" }}>
                  <div>
                    <span>
                      <span>
                        {" "}
                        Name : <strong>{name}</strong>
                      </span>
                    </span>
                  </div>
                  <div>
                    <span>
                      <span>
                        {" "}
                        Surname : <strong>{surname}</strong>
                      </span>
                    </span>
                  </div>
                  <div>
                    <span>
                      <MailTwoTone />

                      <span>
                        {" "}
                        Email : <strong>{email}</strong>
                      </span>
                    </span>
                  </div>
                  <div>
                    <span>
                      <PhoneTwoTone />

                      <span>
                        {" "}
                        Phone : <strong>{phone}</strong>
                      </span>
                    </span>
                  </div>
                  <div>
                    <span>
                      <span>
                        {" "}
                        Age : <strong>{age}</strong>
                      </span>
                    </span>
                  </div>
                </Card>
              )}
              <Button type="primary" htmlType="submit" onClick={deActivateMode}>
                ADD
              </Button>
              <Button type="primary" htmlType="submit" onClick={activateMode}>
                CHANGE
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Armenian First Rent Company . All Rights Reserved. © 2021
      </Footer>
    </Layout>
  );
};
