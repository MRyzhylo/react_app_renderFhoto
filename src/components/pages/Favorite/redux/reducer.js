const initialState = {
    photos: [],

}

export default function (state = initialState, action) {
   switch (action.type) {
       case 'SET_FAVORITE': {

            let isPhoto = state.photos.find(photo => photo.id === action.photo.id);

           return {
               ...state,
               photos: isPhoto ? state.photos : [action.photo, ...state.photos]
           }
       }

       case 'REMOVE_FAVORITE': {
        return {
            ...state,
            photos: state.photos.filter(photo => photo.id !== action.id)
        }
    }

       default: return state;
   }
}