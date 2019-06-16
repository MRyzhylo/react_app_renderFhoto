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

  const { urls, updated_at, alt_description, likes } = props.photo;

    const renderDate = () => {
      const date = new Date(updated_at);
      return date.toLocaleDateString('ru-RU')
    }

  return (
    <div className="main-photo">
        {urls && <img src={urls.regular} alt={alt_description} />}
        <span>{likes}</span>
        <div className='photo-header'>
        <i>{renderDate()}</i> 
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  photo: state.photo.data
});

const mapDispatchToProps = dispatch => ({
  setPhoto: photo => dispatch({type: 'SET_PHOTO', photo})
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
