import React, {Component} from 'react';
import CounterComp from './CounterComp';

class HoverCounter extends Component
{
    
    constructor(props){
        super(props);  
    }
    //----------------------------------
    render(){
        //can be reused, function is not defined here
        const {count, increaseCounter} = this.props
        return(
            <div>
                HoverCounter.......
                <h2 onMouseOver={increaseCounter}>Hover {count} Times</h2>
            </div>
        )
    }
}

//passing HoverCounter as a function
export default CounterComp(HoverCounter)