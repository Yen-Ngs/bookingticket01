import React, { useState, useEffect } from 'react'
import {connect, useSelector, useDispatch} from 'react-redux'
import {layDanhSachPhimAction} from '../../redux/actions/FilmAction'

export function ReduxHookHome(props) {
    // useSellector is a hook to get data from reducer 
    const arrFilms = useSelector(state =>state.PhimReducer.arrFilms)

//useDispatch the same this.props.dispatch
    const dispatch = useDispatch()

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
        dispatch(layDanhSachPhimAction())

        return ()=>{
            //this function will be actived when component disappear from giao dien 
        }

    },[])



    return (
        <div className="container mt-5">
            <button onClick={()=>{
            }}>Movie List</button>
            <div className="display-4 text-center">Movie List</div>
            <div className="row">
                {renderFilms()}
            </div>

        </div>
    )
        }


