import { createContext, useReducer, useContext } from "react";

//CREATE GLOBAL STATE FOR Wishlist
const WishlistStateContext = createContext();
const WishlistDispatchContext = createContext();

export const ACTIONWISHLIST ={
    ADD:"add",
    REMOVE:"remove"
}

const reducer = (state, action) =>{
    switch(action.type){
        case ACTIONWISHLIST.ADD:
            return [...state, action.item]
        case ACTIONWISHLIST.REMOVE:
            const newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr
        default:
            throw new Error(`Unknown action ${action.type}`)
    }
}
export  const WishlistProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, [])

    return(
        <WishlistDispatchContext.Provider value={dispatch}>
            <WishlistStateContext.Provider value={state}>
                {children}
            </WishlistStateContext.Provider>
        </WishlistDispatchContext.Provider>
    )
}


export const UseWishlist = ()=> useContext(WishlistStateContext)


export const UseDispatchWishlist = ()=> useContext(WishlistDispatchContext)