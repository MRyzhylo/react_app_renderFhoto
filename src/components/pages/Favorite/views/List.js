import React from 'react';

import Photo from './Photo';

function List(props) {

    const { photos, removeFavorite } = props;

  return (
    <div className="gallery-list">
    {
        photos.map(photo => <Photo key={photo.id} data={photo} removeFavorite={removeFavorite} />)
    } 
    </div>
  );
}

export default List;
