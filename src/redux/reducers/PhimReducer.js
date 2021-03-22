const stateDefault ={
    arrFilms: [],
    filmDetails:{}
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

        default:{
            return{...state}
        }
    }
}