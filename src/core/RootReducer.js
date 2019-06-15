import {combineReducers} from 'redux'

import app from '../components/App/redux/reducer';
import gallery from '../components/pages/Gallery/redux/reducer';
import photo from '../components/pages/Photo/redux/reducer';


export default combineReducers({
    app,
    gallery,
    photo,
})