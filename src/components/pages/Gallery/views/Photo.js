import React from 'react';
import { NavLink } from 'react-router-dom';


function Photo(props) {

    const { id, urls:{thumb}, updated_at, alt_description, likes } = props.data;

    const renderDate = () => {
      const date = new Date(updated_at);
      return date.toLocaleDateString('ru-RU')
    }

  return (
    <div className="photo">
        <span>{likes}</span>
        <i>{renderDate()}</i> 
        < NavLink to={`photo/${id}`} >
        <img src={thumb} alt={alt_description} />
        </NavLink>
        <p>{alt_description}</p>
    </div>
  );
}

export default Photo;
