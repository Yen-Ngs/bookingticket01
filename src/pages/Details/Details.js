import React, {useEffect} from 'react'
import {useDispatch, useSelector, } from 'react-redux'
import {getDetails} from '../../redux/actions/FilmAction'

export default function Details(props) {
    const {filmDetails} = useSelector(state=>state.PhimReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        let {id} =  props.match.params;
       dispatch(getDetails(id))
    }, [])
    return (
        <div className="container">
            Id:{props.match.params.id}
            <div className="row mt-5">
                <div className="col-6">
                    <img src="https://picsum.photos/200/500" className="w-100"  alt="123"></img>
                </div>
                <div className="col-6">
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
    )
}
