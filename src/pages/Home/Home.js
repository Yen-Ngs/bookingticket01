import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    
    state ={
        arrFilms: []
    }



    loadFilm = ()=>{
        const promise = axios({
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method:'GET',
            
        })
        promise.then((result)=>{
            console.log('result',result.data);
            this.setState({
                arrFilms:result.data
            })
        })
        promise.catch((error) =>
        {
            console.log('err',error.response.data);
        })

    }

    renderFilm = ()=>{
        return this.state.arrFilms.map((film,index)=>{
            return<div className="col-4" key={index}>
  <img className="card-img-top" src={film.hinhAnh} alt={film.hinhAnh} />
  <div className="card-body">
    <h4 className="card-title">{film.tenPhim}</h4>
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
    componentDidMount(){
        //cac API muon goi sau khi giao dien render thi se goi trong ham nay 
        this.loadFilm();
    }
}
