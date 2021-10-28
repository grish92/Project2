import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import { currencySign } from "../../utils.js";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

export const Apartments = (props) => {
  console.log(props);
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
              <HeartTwoTone
                twoToneColor={props.favoritesList.some(
                  (e) => e.id === apartment.id
                )}
                onClick={() => props.toggleClick(apartment)}
              />
            </Card>
          </Card.Grid>
        );
      })}
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
              </Card>
            </Card.Grid>
          );
        })}
      </div>
    </>
  );
};
