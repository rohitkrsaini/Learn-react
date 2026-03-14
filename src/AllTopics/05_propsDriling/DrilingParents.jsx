import React from "react";
import { useState } from "react";
import DrilingChild1 from "./DrilingChild1";


const DrilingParents = () => {
const [data,setData] = useState("helo nesded child")


return(
    <div>
        <h1>Learn props driling data</h1>
        <DrilingChild1 data={data} setData= {setData}></DrilingChild1>
    </div>
)
}
export default DrilingParents