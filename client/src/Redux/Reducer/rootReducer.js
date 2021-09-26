import { combineReducers } from "redux";
import restaurantReducer from "./restaurant/resturant.reducer";

const rootReducer = combineReducers({ restaurantReducer })

export default rootReducer;