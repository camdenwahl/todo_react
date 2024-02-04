import React from "react";




function Navbar({handleDisplay}) {
    return(
        <div id = "nav-bar">
            <h2>To Do App</h2>
            <img src="/hamburger.png" alt=""  id = "menu-open" onClick = {handleDisplay}/>
        </div>
    )
}

export default Navbar;