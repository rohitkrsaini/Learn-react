import HOC from "./HOC";

const ChildHOC = (props) =>{
    console.log(props);
    
    return (
         <div className="text-center p-5">
            <h1 className="font-bold text-4xl my-5">
                child HOC
            </h1>
            <hr/>
            </div>
    )
}
export default HOC(ChildHOC)