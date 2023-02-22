import React, { useState, useRef, useEffect} from 'react'

export const UseRefExample = () => {
    const [text,setText]=useState('')
    const [todo,setTodo]=useState([])
    const inputRef=useRef(null)
    
    const handleAdd=()=>{
        if(!text.trim())return
        setTodo([...todo,text])
        setText('')
        inputRef.current.focus()
    }
    ///////////////componetDidMount
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input
         type="text"
         value={text} 
         onChange={e=>setText(e.target.value)} ref={inputRef } placeholder="type here"/>

        <button onClick={()=>handleAdd()}>Add</button>
        {todo.map((item,index)=>{
         return   <li key={index}>{item}</li>
        })}
    </div>
  )
}
