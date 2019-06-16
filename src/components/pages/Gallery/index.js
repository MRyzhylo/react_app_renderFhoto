import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import List from './views/List'
import {GET_PHOTOS} from '../../../utils/PhotoApiService';
import './style.scss';

function Gallery(props) {

  const { setPhotos, photos, setFavorite } = props;

  useEffect(()=>{
    GET_PHOTOS()
      .then(photos => {
        setPhotos(photos);
      })
      .then()


  }, [setPhotos]);

  return (
    <div className="gallery">
      <List photos={photos} setFavorite={setFavorite} />
    </div>
  );
}

const mapStateToProps = state => ({
  photos: state.gallery.photos
});

const mapDispatchToProps = dispatch => ({
  setPhotos: photos => dispatch({type: 'SET_PHOTOS', photos}),
  setFavorite: photo => dispatch({type: 'SET_FAVORITE', photo})
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
