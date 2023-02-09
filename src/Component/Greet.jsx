import React from "react"

export const Greet=(props)=>{
    
    return(
        <div>
            {/* <h1>Hello {props.firstName}, {props.name2}, {props.name3}, welcom to career next</h1> */}
            <h1>Hello {props.firstName},{props.name2} welcom to career next</h1>
           
            <h2>{props.name3},</h2>
        </div>
    )
}