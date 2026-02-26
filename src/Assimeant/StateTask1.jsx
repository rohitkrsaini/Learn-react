import { useState } from "react";

const StateTask1 = () =>{
    const [Show,SetShow] =useState(false)

    const handleBtn = ()=>{
        SetShow((Show) => Show === false?true:false)
    }


    return(
        <>
        <div
        style ={{backgroundColor: Show ? "green" : "red"}}>
        <button onClick={handleBtn}>{Show ?"show":"hide"}</button>
        {Show &&<ol> Computer
            <li>Display</li>
            <li>Mouse</li>
            <li>Keybord</li>
            <li>CPU</li>
        </ol>}
        </div>
        </>
    )
}
export default StateTask1