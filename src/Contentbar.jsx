import React from "react";

function Contentbar({projectComponents, handleAddTask, handleShowEntry, showEntry, toDoList, handleToDoDelete, sidebarVisibility}) {
    return (
        <div id = "content-bar" style={{ width: !sidebarVisibility ? '100vw' : '0%', display: !sidebarVisibility ? 'flex' : 'none' }}>
                {projectComponents.map(project => {
                if (project.selectedState) {
                    return (
                    <div key = {project.uniqueKey}>
                        <div className = "project-container">
                            <h3>{project.name}</h3>
                            <div className = "task-container">
                                <button onClick = {() => (handleShowEntry(project.uniqueKey))} id = "addTaskButton">Add Task</button>
                                {project.showEntry ? 
                                <form id = "entryForm" onSubmit = {(event) => handleAddTask(event, project.uniqueKey)}>
                                    <label htmlFor="">
                                        Task: <input type="text" value = {toDoList.task} name = "task"/>
                                    </label>
                                    <label>
                                        Priority: <input type = "number" min = "0" max ="3" value={toDoList.priority} name = "priority"></input>
                                    </label>
                                    <label>
                                        Deadline: <input type = "date" value={toDoList.deadline} name = "deadline"></input>
                                    </label>
                                    <button type = "submit">Submit</button>
                                </form> : null}
                                {toDoList.map(toDo => {
                                    if (project.uniqueKey === toDo.folder)
                                    return (
                                    <div className = "task-item">
                                    <p>Task: {toDo.task}</p>
                                    <p> Priority: {toDo.priority}</p>
                                    <p>Date: {toDo.deadline}</p>
                                    <button onClick={handleToDoDelete} value = {toDo.uniqueID}>X</button>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>)
                }
            })}

        </div>
    )
}
export default Contentbar;