// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {useState}  from "react";



const App=()=>{
  let [count,setCount]=useState(0)
  console.log(count)
    return (
        <div>
          <h1>The counter is    {count}</h1>
          <button onClick={()=>count>=10 ?"" : setCount(count+1)}>for +</button>
          <button onClick={()=>count<=0?"" :setCount(count-1)}>for -</button>
          <button onClick={()=>setCount(0)}>for Reset</button>


          
          
        </div>
    )

}

export default App;
