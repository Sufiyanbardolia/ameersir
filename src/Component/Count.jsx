import { Button } from "@mui/material";
import React,{useState} from "react";

export const Count =()=>{
    const [countVal, setCountVal] = useState(0);
    const handleIncreament=(a,b)=>{
        setCountVal(countVal+1)
    }
    const handleDecreament=()=>{
        setCountVal(countVal-1)
    }
   

    return (
        <div>
            <h1>hello </h1>
            {/* <Button onClick={()=>setCountVal(countVal+1)}>increament</Button>
            <h1>counter value {countVal}</h1>
            <Button onClick={()=>setCountVal(countVal-1)}>decreament</Button> */}

            <Button onClick={handleIncreament}>increament</Button>
            <h1>counter value {countVal}</h1>
            <Button onClick={handleDecreament}>decreament</Button>

           
         
     
        </div>
    )
}