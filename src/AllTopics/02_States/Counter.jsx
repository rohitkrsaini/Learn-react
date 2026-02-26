import { useState } from "react";

const Counter = () =>{
    const [count ,setCount] = useState(0)

    const incre = () =>{
        setCount((preves) => preves +3)
        
    }

    const decre = () =>{
        setCount((preves) => (preves > 0 ? (preves-1): 0))
    }

    const reset = () =>{
        setCount(0)
    }


return(
    <>
    <h1>Counter : {count}</h1>
    <button onClick={incre}>Increment</button>
    <button onClick={decre} disabled={count === 0 ? true:false}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
)
}
export default Counter