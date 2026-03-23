import Home from "./Home"
import About from "./About"
import Nav from "./Nav"
import { useState } from "react"



const Dashbord = ()=>{
  const [path, setPath] = useState("/");
  return (
    <div>
      <Nav setPath={setPath} />

      {path === "/" && <Home />}
      {path === "/about" && <About />}
    </div>
  );
}
export default Dashbord