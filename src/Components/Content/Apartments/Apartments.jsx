import React, { useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { HeartTwoTone } from "@ant-design/icons";
import { currencySign } from "../../utils.js";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};


export const Apartments = (props) => {
    console.log(props)
  return (
    <>
      {props.apartments.map((apartment) => {
        return (
          <Card.Grid hoverable={false} style={gridStyle} key={apartment.id}>
            <Card
              title={"APARTMENT CODE - " + apartment.id}
              style={{ width: 320 }}
            >
              <Link to={"/apartment/" + apartment.id}>
                <img
                  style={{ width: 270, height: 260 }}
                  alt={apartment.location}
                  src={apartment.src}
                />
              </Link>
              <p>{apartment.location}</p>
              <p>{currencySign(apartment.price)}</p>
              <HeartTwoTone
                twoToneColor={props.favoritesList.some((e) => e.id === apartment.id)}
                onClick={() => props.toggleClick(apartment)}
              />
            </Card>
          </Card.Grid>
        );
      })}
    </>
  );
};
