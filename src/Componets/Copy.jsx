import React, { useState, useRef, useEffect} from 'react'

export const Copy = () => {
    const [text,setText]=useState('')
    const [text2,setText2]=useState('')
    const [todo,setTodo]=useState([])
    const inputRef=useRef(null)
    const inputRef2=useRef(null)
    
    const handleAdd=()=>{
        // if(!text.trim())return 
        setTodo([...todo,text,text2])
        setText('')
        setText2('')
        inputRef2.current.focus()
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
          <input
         type="text"
         value={text2} 
         onChange={e=>setText2(e.target.value)} ref={inputRef2 } placeholder="type here"/>
         
         
        <button onClick={()=>handleAdd()}>Add</button>
        {todo.map((item,index)=>{
         return   <li key={index}>{item}</li>
        })}
    </div>
  )
}
