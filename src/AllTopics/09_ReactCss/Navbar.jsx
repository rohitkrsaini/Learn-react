import React from "react";
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className= {style.navbar}>
            
            <p>using me moudle css</p> <br/>

            <button id={style.loginbtn}>Login</button>
        </nav>
    )
}
export default Navbar