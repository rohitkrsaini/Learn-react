import { useState } from "react";

const StateTask1 = () =>{
    const [Show,SetShow] =useState(false)

    const handleBtn = ()=>{
        SetShow((pre) => pre === false?true:false)
    }


    return(
        <>
        <div
        // style ={{backgroundColor: Show ? "green" : "red"}}
        >
            <h1>State Task1</h1>
        <button onClick={handleBtn}>{Show ?"hide":"show"}</button>
        {Show ?<ol> Computer
            <li>Display</li>
            <li>Mouse</li>
            <li>Keybord</li>
            <li>CPU</li>
        </ol> : null}
        </div>
        </>
    )
}
export default StateTask1