import { combineReducers } from "redux"
import cart from "./cart"

const rootReducers = combineReducers({
    water: ()=> "Redux water",
    cart
})

export default rootReducers