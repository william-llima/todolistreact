import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'



function App() {
 
  const navigate = useNavigate()
  return (
    <div className="App">
      <h1>Login Form React</h1>
      <div className="card">
        <input className="inputtelalogin" type='text' name='userName' />
        <br></br>
        <input className="inputtelalogin" type='password' name='password' />
        <br></br>
        <button onClick={()=>navigate("/todolist", { replace: true })} >
          Logar
        </button>
      </div>
    </div>
  
  )
}

export default App
