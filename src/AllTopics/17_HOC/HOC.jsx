const HOC =(Warpper)=> {
    let data = "Hi"
    
    return ()=> {
        return <Warpper data ={data} />
    }
}
export default HOC