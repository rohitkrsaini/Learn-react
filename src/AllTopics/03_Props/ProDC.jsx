import React from "react";

const ProDC = (props) =>{
 const {data1, data2, data3='hello'} = props;
return(
    <>
    <h3>hello {data1}</h3>
    <h3>hello {data2}</h3>
    <h3>hello {data3}</h3>
    </>
)
}


export default ProDC