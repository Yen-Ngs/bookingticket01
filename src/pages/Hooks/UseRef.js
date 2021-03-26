import React, { useState, useRef } from 'react'

export default function UseRef(props) {
    let [number,setNumber] = useState(1);
    let mess = useRef('');
    console.log({mess});
    return (
        <div className="text-center">
            {number}
            <br/>
            <button className="btn btn-success p-2" onClick={()=>{
                setNumber(number+1);
                mess.current = 'Data has been changed!'
            }}>+</button>
            
        </div>
    )
}
