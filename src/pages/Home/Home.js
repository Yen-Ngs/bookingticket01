import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { layDanhSachPhimAction } from '../../redux/actions/FilmAction'
import { NavLink } from 'react-router-dom'
import './Home.css'


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
                <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} style={{ border: '1px solid white', height:'400px' }}/>
                <div className="card-body">
                    <h4 className="card-title">{film.tenPhim}</h4>
                    <NavLink className="btn btn-success mr-5" to={`details/${film.maPhim}`}>Booking Tickets</NavLink>
                    <button className="btn btn-success" onClick={() => { }}>Trailer</button>
                </div>
            </div>

        })
    }
    render() {
        return (
            <div className="text-white movie">
                <div>
                <div id="carouselExampleIndicators" className="carousel slide" style={{height:'800px'}} data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://gaumeothuckhuya.files.wordpress.com/2020/11/emily-in-paris-news.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://thatnerdshow.com/site/wp-content/uploads/2021/03/ChaosWalkingbanner.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://media.vov.vn/sites/default/files/styles/front_large/public/2021-02/Untitled_44.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>

                <div className="container">
                    <div className="text-center display-4"></div>
                    <div className="row mt-10">
                        {this.renderFilm()}
                    </div>
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