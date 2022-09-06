import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import './todolist.css'

 function Todolist(){
    let [valInputTask,setValInputTask] = useState('')
    let [valTask,setValTask] = useState([])
    function addtask(){
        if(valInputTask != '' ){

            setValTask(prevstate => [...valTask,valInputTask]) 
        }
    }
    const navigate= useNavigate()
    return(
        <div className="cardTodoList">
            <h1>Todo List</h1>
            <input 
            className="inputTodoList"
            type='text' 
            name='task' 
            onChange={(e)=>{{setValInputTask(e.target.value)}} } 
            value={valInputTask} 
            />
            <br></br>
            <button onClick={addtask}>
                Adicionar
            </button>
            <br>
            </br>
              {valTask.map(function(el){
                return <div className="cardList"><p key={el}>{el}</p></div>
              })}
            <br>
            </br>
            <button onClick={()=>navigate("/" , {replace:true})}>
                Voltar
            </button>
        </div>
    )
}

export default Todolist