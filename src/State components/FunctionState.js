import React,{useState} from 'react'

function FunctionState() {

    const [number,setNumber] = useState(0)


  return (
    <div>
        <h1>counter:{number}</h1>
        <br/>
        <button onClick={()=>{setNumber(number+1)}}>Increase</button>
        <button onClick={(e)=>{setNumber(number-1)}}>Decrease</button>
    </div>
  )
}


export default FunctionState
