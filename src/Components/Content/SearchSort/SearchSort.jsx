import React from "react";
import { Select, Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../../../style.css";

const { Option } = Select;
export const SearchSort = (props) => {
  
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  const [price, setPrice] = useState(null);
  const [rooms, setRooms] = useState(null);

  const handleChange=()=> {

    props.filter(city, district,price,rooms);
  }
  return (
    <div className="searchSort">
      <div>
        <Select defaultValue={city} style={{ width: 120 }} onChange={setCity}>
          {props.city.map((c) => {
            return (
              <Option key={c.id} value={c.value}>
                {c.name}
              </Option>
            );
          })}
        </Select>
      </div>
      <div>
        <Select
          defaultValue={district}
          style={{ width: 120 }}
          onChange={setDistrict}
        >
          {props.district.map((d) => {
            return (
              <Option key={d.id} value={d.value}>
                {d.name}
              </Option>
            );
          })}
        </Select>
      </div>
      <div>
        <Select
          defaultValue={price}
          placeholder="Price"
          style={{ width: 120 }}
          onChange={setPrice}
        >
          {props.priceFilterMap.map((p, index) => (
            <Option value={index} key={index}>
              {" "}
              {p.from === 0 ? "to" : p.from + " - "} {p.to}{" "}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <Select defaultValue={rooms} style={{ width: 120 }} onChange={setRooms}>
          {props.rooms.map((r) => {
            return (
              <Option key={r.id} value={r.value}>
                {r.amount}
              </Option>
            );
          })}
        </Select>
      </div>
      <Tooltip title="search">
        <Button
          shape="circle"
          icon={<SearchOutlined />}
          onClick={handleChange}
        />
      </Tooltip>
    </div>
  );
};
