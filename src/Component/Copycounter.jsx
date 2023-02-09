import { Button } from "@mui/material";
import React,{useState} from "react";

export const Copycounter =()=>{
    const [countVal, setCountVal] = useState(0);
   const handleClick=(val)=>{
    setCountVal(countVal+val)
   }
   
    return (
        <div>
            <h1>hello </h1>
            <Button onClick={()=>handleClick(+1)}>increament</Button>
            <h1>counter value {countVal}</h1>
            <Button onClick={()=>handleClick(-1)}>decreament</Button> <br /><br />
            <Button onClick={()=>handleClick(0)}>Reset</Button>

           
         
     
        </div>
    )
}