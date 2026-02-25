import { useState } from "react"
const StatesInFBC = ()=>{
    const [Data,setData] = useState("hello everyone") // [ud,f]
    const [cart,setcart] =  useState("Add to cart")
    const [count,setCount] = useState(0)
    

   const handleBtn = () =>{

    setCount(count + 1)
    
    

    if(count === 0)
    setData("Bye everone")

    if(count === 1)
    alert("already update")
   }

    
   const textChange = () =>{
    setcart("go to cart")
   }
   
    return (
        <>
        <h1> Learn State in Function Bassed</h1>
        <h2>{Data}</h2>
        <button
         onClick={handleBtn}>update</button><br/><br/>
        <button onClick={textChange}>{cart}</button>
        </>
    )
}
export default StatesInFBC 