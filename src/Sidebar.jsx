import React, { useState } from "react";

function Sidebar({handleAddProjectProp, projectComponents, showResults, handleShow, handleText, inputValue, handleDelete, handleActiveToggle, handleEnter, sidebarVisibility, sidebarWidth}) {


    return(
        <div id = "side-bar" style={{
            width: sidebarVisibility ? (sidebarWidth ? "20%" : "100vw") : "0",
            display: sidebarVisibility ? "flex" : "none",
          }}>
            <button onClick={handleShow} id = "projectButton">Add Project</button>
            {showResults ? <div id = "input-button-div"><input type="text"  value = {inputValue} onChange = {handleText}  onKeyDown={handleEnter}/> <button onClick = {handleAddProjectProp}>Submit</button></div> : null}
            {projectComponents.map(project => (
                <div key = {project.uniqueKey} className = "project-divs" onClick = {() => handleActiveToggle(project.uniqueKey)}>
                <p>{project.name}</p>
                <button className = "project-buttons" value = {project.uniqueKey} onClick={handleDelete}>X</button>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;