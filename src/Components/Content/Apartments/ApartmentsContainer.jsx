import { connect } from "react-redux"
import { createAddFavorite, createDeleteFavorite, createRemoveFavorite } from "../../../ReduxStore/action"
import { Apartments } from "./Apartments"

let mapStateToProps=(state)=>{
    return{
     apartments:state.Content.apartmentsAll,
     favoritesList:state.Content.favoritList
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
//    addFavorite:(apartment)=>{
//        dispatch(createAddFavorite(apartment))
//    },
//    removeFavorite:(apartmentId)=>{
//        dispatch(createRemoveFavorite(apartmentId))
//    },
//    removeAll:()=>{
//        dispatch(createDeleteFavorite())
//    }
    }
}

export const ApartmentsContainer=connect(mapStateToProps,mapDispatchToProps)(Apartments)