// import React, {useReducer, createContext} from 'react';

// const initialState = {
//   name: "mami"
// }

// const reducer = (state, action) => {
//   switch(action.type) {
//     case "CHSNGE_NAME":
//       return {name: action.playload.name}
//     default:
//       return state;
//   }
// }

// export const Store = createContext({
//   globalState: initialState,
//   setGloblState: () => null
// })

// const StoreProvider = ({children}) => {
//   const [globalState, setGlobalState] = useReducer(reducer, initialState);

//   return(
//     <>
//       <Store.Provider value={{globalState, setGlobalState}}>{children}</Store.Provider>
//     </>
//   );
// }

// export default StoreProvider;
