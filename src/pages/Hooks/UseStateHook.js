import React,{useState} from 'react'
// Hook can only use for rfc (react function Component)
export default function UseStateHook() {
    //tuple: mảng hỗn hợp 
    let [state,setState] = useState ({
        number:1    
    }); 
    //useState là hàm trả về 1 mảng gồm 2 giá trị là state và phương thức setState
    return (
        <div className="container">
            
            <h1>{state.number}</h1>
            <button className="btn btn-success" onClick={
                ()=>setState({number: state.number+1})
            }>+</button>
            
        </div>
    )
}
