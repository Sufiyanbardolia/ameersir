import React, {Component} from "react";
import { FirstComp } from "./FirstComp";

class ClassComp extends Component {
    render(){
        return (
            <div> <p>Hello, i am react's class</p> 
           <FirstComp/>
            </div>
        )
    }
}
export default ClassComp;