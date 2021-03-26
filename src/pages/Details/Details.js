import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { getDetails } from '../../redux/actions/FilmAction'
import './Details.css'

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
                Id:{props.match.params.id}
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
                                    <button className="btn btn-danger m-3" to={`${filmDetails.trailer}`} >Trailer</button>

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
        </div>
    )
}
