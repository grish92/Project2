import { connect } from "react-redux"
import { filterApartment } from "../../../ReduxStore/action"
import { SearchSort } from "./SearchSort"

let mapStateToProps=(state)=>{
    console.log(state)
    return{
        city:state.Content.City,
        district:state.Content.district,
        rooms:state.Content.rooms,
        priceFilterMap:state.Content.priceFilterMap,
        apartments:state.Content.apartmentsAll,
        filteredApartment:state.Content.filteredApartment
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
    // filterApartment:(apartmentCity,apartmentDistrict,apartmentPrice,apartmentRooms)=>{
    //    dispatch(filterApartment(apartmentCity,apartmentDistrict,apartmentPrice,apartmentRooms))
    // }
    }
}

export const SearchSortContainer=connect(mapStateToProps,mapDispatchToProps)(SearchSort)