import React, { Component, PureComponent } from 'react'

//PureComponent giống Component tuy nhiên PureComponent sẽ xét giá trị đầu vào của props có thay đổi không =>nếu có mới render lại 
//shouldComponentUpdate không tồn tại trong PureComponent (vì PureComponent đã xử lý render tự động tương đương với lifecycle)
export default class ChildComponent extends PureComponent {
    setInterval={}
    constructor(props){
        super(props);
        this.state={
            number:1

        }
        console.log('constructor Child');
    }
    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDedrivedFromPropsChild');
        return currentState
    }
    //run after state or props of component changed and before render
    shouldComponentUpdate(newProps,newState){
        //xử lý: return false giao diện không render lại, true giao diện render lại (default)
        return true
    }
    render() {
        console.log('hi, Already render!');
        return (

            <div>
                Props Child:<br/>
                {this.props.stateNumber.number}
                <br/>
                ChildComponent
            </div>
        )
    }
    //Lifecycle to call API
    componentDidMount(){//run one time after first render
        console.log('componentChild');
        
    }

    //ComponentDidupdate run each times props or state changed 
    componentDidUpdate(prevProps,prevState){
        //hạn chế setState trong component này (muốn setState f có điều kiện if)
        console.log('componentDidUpdateChild');

        this.setInterval = setInterval(() => {
            console.log('ahihi');
        },1000)


    }
    //lifecycle chạy trước khi component mất khỏi giao diện 
    componentWillUnmount(){

        clearInterval(this.setInterval)
    }
}
