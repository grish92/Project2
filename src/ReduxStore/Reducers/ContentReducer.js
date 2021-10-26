import {ADD_FAVORITE, DELETE_ALL, FILTER_APARTMENTS, REMOVE_FAVORITE} from '../action.js'

let initialState = {
  City: [
    { id: 1, name: "City", value: null },
    { id: 2, name: "Yerevan", value: "Yerevan" },
    { id: 3, name: "Vanadzor", value: "Vanadzor" },
    { id: 4, name: "Gyumri", value: "Gyumri" },
  ],
  district: [
    { id: 4, name: "District", value: null },
    { id: 1, name: "Arabkir", value: "Arabkir" },
    { id: 2, name: "Erebuni", value: "Erebuni" },
    { id: 3, name: "Malatia", value: "Malatia" },
  ],
  rooms: [
    { id: 1, amount: "Rooms", value:null },
    { id: 1, amount: "1", value:'1' },
    { id: 2, amount: "2", value:'2'  },
    { id: 3, amount: "3", value:'3'  },
    { id: 4, amount: "4", value:'4'  },
  ],
  priceFilterMap: [
    { from: 0, to: 25000 },
    { from: 25000, to: 50000 },
    { from: 50000, to: 100000 },
    { from: 100000, to: 150000 },
  ],
  apartmentsAll: [
    {
      id: 1,
      price: 20000,
      city: "Yerevan",
      district: "Arabkir",
      rooms: 3,
      floorSize: "90sqm",
      src: "https://byalavista.com/wp-content/plugins/vikbooking/site/resources/uploads/big_17097_apart_0017.jpg",
    },
    {
      id: 2,
      price: 27000,
      city: "Gyumri",
      district: "Norq",
      rooms: 3,
      floorSize: "100sqm",
      src: "https://i.pinimg.com/474x/14/9f/59/149f5923cc03c810dd573520c58233ca.jpg",
    },
    {
      id: 3,
      price: 58000,
      city: "Vanadzor",
      district: "Erebuni",
      rooms: 2,
      floorSize: "75sqm",
      src: "https://a3w3j4i7.stackpathcdn.com/wp-content/uploads/2015/11/This-Apartment-Building-Has-a-Black-Reflective-Square-Shaped-Facade-1.jpg",
    },
    {
      id: 4,
      price: 75000,
      city: "Yerevan",
      district: "Erebuni",
      rooms: 2,
      floorSize: "75sqm",
      src: "https://solomarspain.com/media/images/properties/thumbnails/o_1ei2qfca9hrtvk4csh134b1l824a_720x480.jpg",
    },
    {
      id: 5,
      price: 37700,
      city: "Yerevan",
      district: "Erebuni",
      rooms: 4,
      floorSize: "75sqm",
      src: "https://media.makler.md/production/an/original/000/026/455/000026455599.jpg",
    },
    {
      id: 6,
      price: 80000,
      city: "Yerevan",
      district: "Erebuni",
      rooms: 4,
      floorSize: "75sqm",
      src: "https://valoapart.ru/upload/medialibrary/938/Valo_apartment2.jpg",
    },
    {
      id: 7,
      price: 90600,
      city: "Yerevan",
      district: "Erebuni",
      rooms: 4,
      floorSize: "75sqm",
      src: "https://i.pinimg.com/originals/78/64/10/786410c9fb76fdd104701f658b900b5a.jpg",
    },
    {
      id: 8,
      price: 700000,
      city: "Yerevan",
      district: "Erebuni",
      rooms: 4,
      floorSize: "75sqm",
      src: "https://i.pinimg.com/originals/a5/a8/5d/a5a85daf5a20ce3c6c80ab2a06cad2e5.jpg",
    },
  ],
  filteredApartment:[],
  favoritList:[]
};

export const ContentReducer = (state = initialState, action) => {
  switch(action.type){
      case ADD_FAVORITE:
        return{
          ...state,
          favoritList:state.favoritList.concat(action.apartment)
        }
      case REMOVE_FAVORITE:
        return{
          ...state,
          favoritList:state.favoritList.filter((apartment)=>
            apartment.id !== action.apartmentId
          )
        }
        case DELETE_ALL: {
          return { ...state, favoritsList: [] };
        }
      default:
        return state;
  }
  
};



