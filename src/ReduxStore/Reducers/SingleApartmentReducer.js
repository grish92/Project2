let initialState = {
  columns: [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Rooms",
      dataIndex: "rooms",
      key: "rooms",
    },
    {
      title: "FloorSize",
      dataIndex: "floorSize",
      key: "floorSize",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ],
};

export const SingleApartmentReducer = (state = initialState, action) => {
  return state;
};
