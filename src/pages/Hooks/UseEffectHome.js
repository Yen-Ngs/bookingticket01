import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UseEffectHome() {
    const [arrFilms, setArrFilms] = useState([])//create state for arrFilms => load up to Home Pages

    const renderFilms = () => {
        return arrFilms.map((film, index) => {
            return <div className="col-4" key={index}>
                <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh}/>
                <div className="card-body">
                    <h4 className="card-title">{film.tenPhim}</h4>
                    <button className="btn btn-success">Book Tickets</button>
                </div>
            </div>

        })
    }
    //useEffect must put before return,
    //recieved 2 params:
    //+first param: is a function run after component render
    //+second param: conclude state when state changed first param will run
    //Note: 1 component can called many useEffect 

    useEffect(()=>{
        GetFilmsList();

        return ()=>{
            //this function will be actived when component disappear from giao dien 
        }

    },[])
    const GetFilmsList = async ()=>{
        try{
            let result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method:'GET'
            });
            setArrFilms(result.data)
        }catch(errors){
            console.log('errors',errors);

        }
    }



    return (
        <div className="container mt-5">
            <button onClick={()=>{
                GetFilmsList()
            }}>Movie List</button>
            <div className="display-4 text-center">Movie List</div>
            <div className="row">
                {renderFilms()}
            </div>

        </div>
    )
}
