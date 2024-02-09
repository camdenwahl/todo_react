import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./App";




function Navbar() {
    const {handleDisplay} = useContext(GlobalContext);
    return(
        <div id = "nav-bar">
            <h2>To Do App</h2>
            <img src="/hamburger.png" alt=""  id = "menu-open" onClick = {handleDisplay}/>
        </div>
    )
}

export default Navbar;