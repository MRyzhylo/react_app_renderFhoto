import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {GET_PHOTO} from '../../../utils/PhotoApiService';
import './style.scss';

function Photo (props) {
   
  const { match: {params: {photoId}}, setPhoto } = props;
  
  useEffect(()=>{
    GET_PHOTO(photoId)
    .then(photo=> {
      setPhoto(photo)
    });
  },[photoId, setPhoto])

  return (
  <h1>Photo Page</h1>
  );
}

const mapStateToProps = state => ({
  photo: state.photo.data
});

const mapDispatchToProps = dispatch => ({
  setPhoto: photo => dispatch({type: 'SET_PHOTO', photo})
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
