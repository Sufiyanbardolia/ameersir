import React, { useState, useRef, useEffect} from 'react'

export const Copy2 = () => {
    const [text,setText]=useState('')
    const [text2,setText2]=useState('')
    const [text3,setText3]=useState('')
    const [text4,setText4]=useState('')
    const [todo,setTodo]=useState([])
    const inputRef=useRef(null)
    const inputRef2=useRef(null)
    const inputRef3=useRef(null)
    const inputRef4=useRef(null)
    
    const handleAdd=()=>{
        if(!text.trim())return 
        setTodo([...todo,text,text2,text3,text4])
        setText('')
        setText2('')
        setText3('')
        setText4('')
        inputRef.current.focus()
    }
    ///////////////componetDidMount
    useEffect(()=>{
        inputRef4.current.focus()
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
         
         <input
         type="text"
         value={text3} 
         onChange={e=>setText3(e.target.value)} ref={inputRef3 } placeholder="type here"/>
         
         <input
         type="text"
         value={text4} 
         onChange={e=>setText4(e.target.value)} ref={inputRef4 } placeholder="type here"/>
         
         
        <button onClick={()=>handleAdd()}>Add</button>
        {todo.map((item,index)=>{
         return   <li key={index}>{item}</li>
        })}
    </div>
  )
}
