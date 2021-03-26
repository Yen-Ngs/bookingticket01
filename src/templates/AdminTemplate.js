import React from'react'
import {Route} from 'react-router'

export const AdminTemplate = (props) =>{
    let {Component,...restParams} = props;
    return <Route {...restParams} render={(propsRoute)=>{
        return <div>
            <div className="row">
                <div className="col-3 bg-dark text-white text-center" style={{height:1000}}>
                    <h2 style={{borderBottom:'1px solid white'}}>Home</h2>
                    <h2 style={{borderBottom:'1px solid white'}}>Movies List</h2>
                    <h2 style={{borderBottom:'1px solid white'}}>Movies Schedule</h2>
                    <h2 style={{borderBottom:'1px solid white'}}>Pops, Snack and Drinking</h2>
                    <h2 style={{borderBottom:'1px solid white'}}>Coupons</h2>
                    <h2 style={{borderBottom:'1px solid white'}}>Member Register</h2>
                    <h2 style={{borderBottom:'1px solid white'}}>Contact</h2>

                </div>
                <div className="col-8">
                    <Component {...propsRoute}/>

                </div>

            </div>
        </div>
    }}
    />
}