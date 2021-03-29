import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getInforTicketRoom, layDanhSachPhimAction } from '../../redux/actions/FilmAction';

export default function Checkout(props) {
    const {ticketInfor} = useSelector(state =>state.PhimReducer)
    const dispatch = useDispatch();
    let { id } = props.match.params;
    
    useEffect(() => {
        dispatch(getInforTicketRoom(id))
    }, [])
    console.log(ticketInfor);
    return (
        <div>
            
        </div>
    )
}
