import React from 'react'
import Home from '../Home/Home'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            <ChildComponent>
                <div className="text-center display-4">Home</div>
               <Home/>
            </ChildComponent>
        </div>
    )
}
