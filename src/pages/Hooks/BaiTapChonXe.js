import React, { useState } from 'react'

export default function BaiTapChonXe() {
    let [state, setCar] = useState({
        imgSrc: './img/cars/imgBlackCar.jpg'
    });

    const changeColor = (color) => {
        setCar({
            imgSrc: `./img/cars/img${color}Car.jpg`
        })
    }
    return (
        <div className="container">

            <div className="row mt-5">
                <div className="col-6">
                    <img className="w-100" src={state.imgSrc} />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <button onClick={() => {
                                changeColor('Red');
                            }} className="btn btn-danger">Red Car</button>
                        </div>
                        <div className="col-4">
                            <button onClick={() => {
                                changeColor('Black')
                            }} className="btn btn-dark">Black Car</button>
                        </div>
                        <div className="col-4">
                            <button onClick={() => {
                                changeColor('Silver')
                            }} className="btn btn-secondary">Silver Car</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
