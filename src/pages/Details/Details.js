import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { getDetails } from '../../redux/actions/FilmAction'
import './Details.css'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import Checkout from '../Checkout/Checkout'

export default function Details(props) {
    const { filmDetails } = useSelector(state => state.PhimReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(getDetails(id))
    }, [])
    return (
        <div className="details">
            <div className="container">
                <h2 className="display-3">Movie Details</h2>
                <div className="row mt-5">
                    <div className="col-6">
                        <img src={filmDetails.hinhAnh} className="w-100" alt="123"></img>
                    </div>
                    <div className="col-6 ">
                        <table className="table mt-10">
                            <thead>
                                <tr>
                                    <th>Movie Name</th>
                                    <th>{filmDetails.tenPhim}</th>

                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <th>
                                        <p>
                                            {filmDetails.moTa}
                                        </p>
                                    </th>
                                </tr>
                                <tr>
                                    <th>Starting Day:</th>
                                    <th>{filmDetails.ngayKhoiChieu}</th>

                                </tr>
                                <tr>
                                    <th>Evaluating:</th>
                                    <th>{filmDetails.danhGia}</th>

                                </tr>
                                <tr>
                                    <button className="btn btn-success m-3">Booking Tickets</button>
                                    <a className="btn btn-danger m-3" href={`${filmDetails.trailer}`} data-toggle="modal" data-target="#exampleModalCenter">Trailer</a>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-5 container " style={{ backgroundColor: '#1c3c5d' }}>
                <div className="row">
                    <div className="col-4 nav flex-column nav-pills pr-1" id="v-pills-tab"
                        role="tablist" aria-orientation="vertical" style={{ border: '2px solid white' }}>

                        {filmDetails.heThongRapChieu?.map((heThongRap, index) => {
                            let activeClass = index === 0 ? 'active' : '';
                            return <a key={index} className={`nav-link ${activeClass} `} id="v-pills-home-tab"
                                data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab"
                                aria-controls={heThongRap.maHeThongRap} aria-selected="false">
                                <img src={heThongRap.logo} width="50"></img>{heThongRap.tenHeThongRap}
                            </a>
                        })}
                    </div>
                    <div className="col-8 tab-content" id="v-pills-tabContent" style={{ border: '2px solid white' }}>
                        {filmDetails.heThongRapChieu?.map((heThongRap, index) => {
                            const activeClass = index === 0 ? 'active show' : '';
                            return <div
                                key={index}
                                className={`tab-pane fade ${activeClass}`}
                                id={`${heThongRap.maHeThongRap}`} role="tabpanel"
                                aria-labelledby={heThongRap.maHeThongRap}
                            >
                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                    return <div key={index}>
                                        <h3>{cumRap.tenCumRap}</h3>
                                        <div className="row">
                                            {cumRap.lichChieuPhim?.slice(0, 8).map((lichChieu, index) => {
                                                return <NavLink className="col-3 text-success" to={`/checkout/${lichChieu.maLichChieu}`}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>})}
                            </div>


                                        


                
                </div>
                </div >
            </div>
    )
}
