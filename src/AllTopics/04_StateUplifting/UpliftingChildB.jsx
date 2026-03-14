import React from "react";

const UpliftingChildB = ({handleIncrement}) => {

    return(
        <div>
            <h1>B componts</h1>
            <button className="bg-green-500 text-white p-1 rounded" onClick={handleIncrement}>Increment</button>
        </div>
    )
}
export default UpliftingChildB