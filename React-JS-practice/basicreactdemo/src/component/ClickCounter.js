import React, {Component} from 'react'
import CounterComp from './CounterComp';

class ClickCounter extends Component
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
                ClickCounter.......
                <button onClick={increaseCounter}>Click {count} Times</button>
            </div>
        )
    }
}

//passing ClickCounter as a function
export default CounterComp(ClickCounter)