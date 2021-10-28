let initialState = {
  user: [
    {
      id: 1,
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
      to: "userannouncements",
      label: "User Announcements",
    },
  ],
};

export const NavbarReducer = (state = initialState, action) => {
  return state;
};
