import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "./App";

function Sidebar({sidebarWidth}) {
const {handleInput, handleEnter, handleActiveToggle, handleShow, handleDelete, handleAddProject, projectList, showResults, inputValue, sidebarVisibility} = useContext(GlobalContext);

    return(
        <div id = "side-bar" style={{
            width: sidebarVisibility ? (sidebarWidth ? "20%" : "100vw") : "20vw",
            display: sidebarVisibility ? "flex" : "flex",
          }}>
            <button onClick={handleShow} id = "projectButton">Add Project</button>
            {showResults ? <div id = "input-button-div"><input type="text"  value = {inputValue} onChange = {handleInput}  onKeyDown={handleEnter}/> <button onClick = {handleAddProject}>Submit</button></div> : null}
            {projectList.map(project => (
                <div key = {project.uniqueKey} className = "project-divs" onClick = {() => handleActiveToggle(project.uniqueKey)}>
                <p>{project.name}</p>
                <button className = "project-buttons" value = {project.uniqueKey} onClick={handleDelete}>X</button>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;