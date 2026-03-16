import { createContext } from "react";

// step 1 : create a context using createContext , return context object

export const  myStoreContext = createContext();

const ContextProvider = (props) =>{
    console.log(props)  // {children : <ContextParent/>}

    let data1 = "hello";
    let data2 = [10,20,30,40];

    // step 2 Provide a context with a data

    return(
        <myStoreContext.Provider value = {{data1,data2}}>
            {props.children}
        </myStoreContext.Provider>
    )
}
export default ContextProvider;