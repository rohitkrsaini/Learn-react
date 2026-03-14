import DrilingChild2 from "./DrilingChild2";
const DrilingChild1 = ({data,setData}) =>{
return(
    <div>
        <h1>child 1 componts</h1>
         <DrilingChild2 data={data} setData={setData}></DrilingChild2>
    </div>
)
}
export default DrilingChild1