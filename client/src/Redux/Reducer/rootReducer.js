import { combineReducers } from "redux";
import restaurant from "./restaurant/resturant.reducer";
import image from "./image/image.reducer"

const rootReducer = combineReducers({ restaurant,image })

export default rootReducer;