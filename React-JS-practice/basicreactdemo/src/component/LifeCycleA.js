/* Main Lifecycle phase
    1. Initial render/ mounting
    2. Rerender phase/ updating
 */

import React, {Component} from 'react'

export default class LifeCycleA extends Component
{   
    constructor(props)
    {
        super(props);
        this.state = {
            x:0,
            y:0
        }
        console.log ("LifeCycleA constructor is executed");
    }
    //----------------------------------------------------------------
    //called right before rendering the element(s) in the DOM.
    static getDerivedStateFromProps(props, state)
    {
        console.log("LifeCycleA getDerivedStateFromProps is executed \n" + 
        "Props : " + props.score - "State X : " + state.x);
        return null;
    }

    shouldComponentUpdate(props, state)
    {
        console.log("LifeCycleA shouldComponentUpdate is executed");
        return true; 
        //if you return false, your component will not get rerender. 
        //therefore, your changes will not be updated
    }

    //----------------------------------------------------------------

    //outputs the HTML to the DOM
    render()
    {
        console.log("LifeCycleA render is executed")
        return (
            <div>LifeCycleA................Score:{this.props.score}
                <h5>X : {this.state.x} - Y : {this.state.y}</h5>
                <button onClick={(event)=>{
                    this.setState({x:10, y:10})
                }}>Change X Y Position</button>
            </div>
        )
    }

    //----------------------------------------------------------------

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("LifeCycleA getSnapshotBeforeUpdate is executed " + 
        "prevProps score : " + prevProps.score + " PrevState X : " + prevState.x +
        " PrevState Y : " + prevState.y
        );
        return null;
    }

    //called after the component is rendered
    //run statements that requires that the component is already placed in the DOM
    componentDidMount()
    {
        console.groupCollapsed("LifeCycleA componentDidMount is executed");
    }
    componentDidUpdate()
    {
        console.groupCollapsed("LifeCycleA componentDidUpdate is executed");
    }
}
