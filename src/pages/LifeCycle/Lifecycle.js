import React, { Component } from 'react'
import ChildComponent from '../LifeCycle/ChildComponent'

export default class Lifecycle extends Component {

    constructor(props){
        super(props);
        this.state={
            number:1,
            stateNumber:{
                number:1
            }

        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDedrivedFromProps');
        return currentState
    }
    //run after state or props of component changed and before render
    shouldComponentUpdate(newProps,newState){
        //xử lý: return false giao diện không render lại, true giao diện render lại (default)
        return true
    }
    render() {
        console.log('render');
        return (
            <div>
                LifeCycle
                <h1>{this.state.stateNumber.number}</h1>
                <button onClick={()=>{
                    // this.setState({number:this.state.number+1})
                    let newStateNumber = {...this.state.stateNumber};
                    newStateNumber.number +=1
                    this.setState({
                        stateNumber:newStateNumber 
                    })
                }}>Click</button>
                {this.state.stateNumber.number<3?
                <ChildComponent stateNumber={this.state.stateNumber}/>:''}
            </div>
        )
    }
//Lifecycle to call API
    componentDidMount(){//run one time after first render
        console.log('component');

    }

    //ComponentDidupdate run each times props or state changed 
    componentDidUpdate(prevProps,prevState){
        //hạn chế setState trong component này (muốn setState f có điều kiện if)
        console.log('componentDidUpdate');

    }
}
