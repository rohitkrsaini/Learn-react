const DrilingChild2 = ({data,setData}) => {
return(
    <div>
        <h1>child 2 componts {data}</h1>
        <button className="bg-green-500 text-white p-1 rounded" onClick={ () => {
             
            setData("hi parents")
            }}> sendData</button>
    </div>
)
}

export default DrilingChild2