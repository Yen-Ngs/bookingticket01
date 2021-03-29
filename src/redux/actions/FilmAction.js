import axios from 'axios'

export const layDanhSachPhimAction = () => {
    return async (dispatch) => {
        dispatch({
            type: 'openLoading'
        })
        setTimeout(async () => {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            dispatch({
                type: 'GET_FILMS',
                arrFilms: result.data
            });
            dispatch({
                type: 'closeLoading'
            })
        }, 1000)
    }


}
//get Film Details

export const getDetails = (idFilm) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`,
                method: 'GET'
            });
            dispatch({
                type: 'GET_DETAILS',
                filmDetails: result.data
            })
        } catch (errors) {

        }
    }
}

export const getInforTicketRoom = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
                ,
                method: 'GET'
            });
            dispatch({
                type: 'GET_INFOR_TICKET_ROOM',
                ticketInfor: result.data
            })

        } catch (error) {
            console.log('error', error);
        }
    }
}