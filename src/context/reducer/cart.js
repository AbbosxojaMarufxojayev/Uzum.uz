import { act } from "react-dom/test-utils"
import { ADD_TO_CART, REMOVE_CART, REMOVE_ALL_FROM_CART } from "../action/ActionType"

const cart = ( state=[], action )=>{
    const index = state?.findIndex((item) => item?.id === action?.payload?.id)
    switch(action.type){
        case ADD_TO_CART: 
        if( index > 0 ){
            return state = [...state, {...action.payload, quantitiy: 1}]
        }else{
            return state?.map((item, inx) => inx === index ? {...item, quantity : item.quantitiy + 1} : item )
        }
        default:
            return state
        }
}

export default cart