import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {layDanhSachPhimAction} from '../../redux/actions/FilmAction'
import{NavLink} from 'react-router-dom'

class Home extends Component {

    // state ={
    //     arrFilms: []
    // }



    loadFilm = () => {
        this.props.dispatch(layDanhSachPhimAction())

    }

    renderFilm = () => {
        return this.props.arrFilms.map((film, index) => {
            return <div className="col-4 mt-5 " key={index} style={{ border: 'none' }}>
                <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{film.tenPhim}</h4>
                    <NavLink className="btn btn-success mr-5" to = {`details/${film.maPhim}`}>Booking Tickets</NavLink>
                    <button className="btn btn-success" onClick={() => { }}>Trailer</button>
                </div>
            </div>

        })
    }
    render() {
        return (
            <div className="container">
                <div className="text-center display-4"></div>
                <div className="row mt-10">
                    {this.renderFilm()}
                </div>
            </div>
        )
    }
    //ham giong ham render cua react component ke thua nen co 
    componentDidMount() {
        //cac API muon goi sau khi giao dien render thi se goi trong ham nay 
        this.loadFilm();
    }
}


const mapStateToProps = (state) => {
    return {
        arrFilms: state.PhimReducer.arrFilms
    }

}
export default connect(mapStateToProps)(Home)