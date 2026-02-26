import { useState } from "react"

const ThemeChange = () =>{

  const [theme,setTheme] = useState("dark")

  const handleTheme = ()=>{
    console.log("change theme");
    
    setTheme((prevs) => (prevs ==="dark") ? "light" : "dark")

    document.body.style.backgroundColor = theme === "dark" ? "black" : "white"
    document.body.style.color =  theme === "dark" ? "white" :"black"
    
  }

    return (
        <section>
            <h1> Theme change text</h1>
            <button onClick={handleTheme}>{theme}</button>
        </section>
    )
}

export default ThemeChange