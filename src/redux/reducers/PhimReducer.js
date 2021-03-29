const stateDefault ={
    arrFilms: [],
    filmDetails:{tenPhim:'default', heThong:[]},
    ticketInfor:{}
}

export const PhimReducer = (state=stateDefault,action) =>{
    switch (action.type){

        case 'GET_FILMS':{
            state.arrFilms = [...action.arrFilms]
            return{...state}
        }
        case 'GET_DETAILS':{
            state.filmDetails =action.filmDetails
            return{...state}
        }
        case 'GET_INFOR_TICKET_ROOM':{
            state.ticketInfor = action.ticketInfor;
            return{...state};
        }


        default:{
            return{...state}
        }
    }
}