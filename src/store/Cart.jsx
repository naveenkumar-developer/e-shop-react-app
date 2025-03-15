// I CREATE ALL FUNCTIONALITY IN THIS FILE

import { createContext, useReducer, useContext } from "react";

//CREATE GLOBAL STATE FOR CART
const CartStateContext = createContext();
const CartDispatchContext = createContext();

export const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD:
      //check if item is alreay exists
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }
    case ACTION.REMOVE:
      return state.filter((item) => item.id !== action.id);
    case ACTION.INCREMENT:
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity +1 } : item
      );

    case ACTION.DECREMENT:
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity -1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove if quantity is 0
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const UseCart = () => useContext(CartStateContext);

export const UseDispatchCart = () => useContext(CartDispatchContext);
