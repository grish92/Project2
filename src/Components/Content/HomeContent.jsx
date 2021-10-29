import { Layout } from "antd";
import React from "react";
import { NavbarContainer } from "../Navbar/NavbarContainer";

import { ApartmentsContainer } from "./Apartments/ApartmentsContainer";

import { SearchSortContainer } from "./SearchSort/SearchSortContainer";
const { Footer, Content } = Layout;

export const HomeContent = (props) => {
  console.log(props);

  const handleChange = (city, district, price, rooms) => {
    let filteredApartments = [...props.apartments];
    if (city) {
      filteredApartments = filteredApartments.filter((e) => e.city === city);
    }
    if (district) {
      filteredApartments = filteredApartments.filter(
        (e) => e.district === district
      );
    }
    if (price !== null) {
      filteredApartments = filteredApartments.filter(
        (e) =>
          e.price >= props.priceFilterMap[price]["from"] &&
          e.price <= props.priceFilterMap[price]["to"]
      );
    }
    if (rooms) {
      filteredApartments = filteredApartments.filter(
        (e) => e.rooms === parseInt(rooms)
      );
    }
    console.log(filteredApartments);
    props.filteredApartment.push(...filteredApartments);
  };
  const toggleClick = (apartment) => {
    if (props.favoritesList.some((e) => e.id === apartment.id)) {
      props.removeFavorite(apartment.id);
    } else {
      props.addFavorite(apartment);
    }
  };
  return (
    <Layout>
      <Layout>
        <Content style={{ padding: "0 50px" }}>
          <NavbarContainer/>
          <SearchSortContainer filter={handleChange} />
          <ApartmentsContainer toggleClick={toggleClick} />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Armenian First Rent Company . All Rights Reserved. © 2021
      </Footer>
    </Layout>
  );
};
