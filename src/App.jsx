import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Contentbar from './Contentbar'
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [projectList, setProjectList] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showEntry, setShowEntry] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  function handleShow() {
    setShowResults(!showResults);
  }

  function handleAddProject() {
    const newArrayState =  [...projectList, {"name": inputValue, "uniqueKey": uuidv4(), "selectedState": false, "showEntry": false} ];
    setProjectList(newArrayState);
    setInputValue("");
    setShowResults(false);
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  function handleDelete(event) {
    event.stopPropagation();
    const newArrayState = [...projectList].filter(project => {
      if (project.uniqueKey !== event.target.value){
        return project;
      }
    });
    const cleanToDos = [...toDoList].filter(project => {
      if(project.folder !== event.target.value){
        return project;
      }
    }) 
    setToDoList(cleanToDos);
    setProjectList(newArrayState);
  }

  function handleToDoDelete(event){
    const cleanToDos = [...toDoList].filter(toDo => {
      if(toDo.uniqueID !== event.target.value){
        return toDo;
      }
    }) 
    setToDoList(cleanToDos);
  }


  function handleActiveToggle(uniqueKey) {
    const newArrayState = [...projectList].map(project => {
      if (project.uniqueKey === uniqueKey) {
        return {...project, selectedState: !project.selectedState };
      } else if (project.uniqueKey !== uniqueKey) {
        return {...project, selectedState: false};

      } else {
        return project;
      }
    })
    console.log(newArrayState);
    setProjectList(newArrayState);
  }

  function handleShowEntry(uniqueKey) {
    const newArrayState = [...projectList].map(project => {
      if (project.uniqueKey === uniqueKey) {
        return {...project, showEntry: !project.showEntry };
      } else if (project.uniqueKey !== uniqueKey) {
        return {...project, showEntry: false};
      }
    })
    setProjectList(newArrayState);
  }

  function handleAddTask(event, uniqueKey) {
    event.preventDefault();
    const objName = event.target.elements.task.value;
    const objValue = event.target.elements.priority.value;
    const objDate = event.target.elements.deadline.value;
    setToDoList((prev) => {
      return [...prev, {"folder": uniqueKey, "task": objName, "priority": objValue, "deadline": objDate, uniqueID: uuidv4()}]
    })
    console.log(toDoList);
  }

  function handleEnter(event){
    if (event.key === "Enter"){
      handleAddProject();
    }
  }

  return(
    <>
    <Navbar/>
    <div id = "flex-content">
    <Sidebar 
    handleAddProjectProp = {handleAddProject}
    handleText = {handleInput} 
    projectComponents = {projectList} 
    showResults={showResults} 
    handleShow={handleShow}
    inputValue={inputValue}
    handleDelete={handleDelete}
    handleActiveToggle={handleActiveToggle}
    handleEnter={handleEnter}
    
    />
    <Contentbar 
    projectComponents= {projectList}
    handleAddTask={handleAddTask}
    handleShowEntry={handleShowEntry}
    showEntry={showEntry}
    toDoList = {toDoList}
    handleToDoDelete = {handleToDoDelete}
    />
    </div>
    </>
  )
  }

export default App;
