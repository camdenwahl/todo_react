import React, { useState } from "react";

<<<<<<< HEAD
function Sidebar({handleAddProjectProp, projectComponents, showResults, handleShow, handleText, inputValue, handleDelete, handleActiveToggle, handleEnter}) {
=======
function Sidebar({handleAddProjectProp, projectComponents, showResults, handleShow, handleText, inputValue, handleDelete, handleActiveToggle}) {
>>>>>>> 5c7b64933b61bdbcc28ad32e7215ff4429f2dda5

    return(
        <div id = "side-bar">
            <button onClick={handleShow} id = "projectButton">Add Project</button>
<<<<<<< HEAD
            {showResults ? <div id = "input-button-div"><input type="text"  value = {inputValue} onChange = {handleText}  onKeyDown={handleEnter}/> <button onClick = {handleAddProjectProp}>Submit</button></div> : null}
=======
            {showResults ? <div><input type="text"  value = {inputValue} onChange = {handleText} /> <button onClick = {handleAddProjectProp}>Submit</button></div> : null}
>>>>>>> 5c7b64933b61bdbcc28ad32e7215ff4429f2dda5
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