import ChildHOC from "./ChildHOC"

const ParentHOC = () => {
    return(
        <div className="text-center p-5">
            <h1 className="font-bold text-4xl my-5">
                learn higer order component
            </h1>
            <hr/>
            <ChildHOC/>
        </div>
    )
}
export default ParentHOC