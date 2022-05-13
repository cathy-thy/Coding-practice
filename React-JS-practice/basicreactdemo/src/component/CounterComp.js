import React, {Component} from 'react';
/* HOC
    - Custom components which wraps another component
    - They accept synamically provided child components
    - Do not modify the input component
    - Do not copy any behavior from the input component
    - Are "Pure" functions

    *Code reuse, logic and bootstrap abstraction
    *render high jacking 
    *state abstraction and manipulation
    *props manipulation
*/


//passing parameter
function CounterComp (OriginalComp)
{

    class NewComp extends React.Component{
        constructor(props){
            super(props);
            this.state={count:0}
        }
        //----------------------------------
        incCounter=()=>{
            this.setState((prevSta)=>{
                return{count:prevSta.count+1}
            })
        }
        //----------------------------------
        render()
        {
            return (
                <OriginalComp 
                    count={this.state.count}
                    //passing this.incCounter as a props
                    increaseCounter={this.incCounter}/>
            )
        }
    }
    //----------------------------------
    //return new component
    return(NewComp)
    
}
export default CounterComp;