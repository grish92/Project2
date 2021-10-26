let initialState = {
  user: [
    {
      id:1,
      to: "home",
      label: "Home",
    },
    {
      id: 2,
      to: "favorites",
      label: "Favorites",
    },
    {
      id: 3,
      to: "notifications",
      label: "Notifications",
    },
  ],
};

export const NavbarReducer = (state = initialState, action) => {
  return state;
};
