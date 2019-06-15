const CLIENT_ID = 'ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c';
const API_URL = 'https://api.unsplash.com/photos/';

export const GET_PHOTOS = (pageNum =1 ,limit = 10) => {
    const PHOTOS_URL = `${API_URL}?page=${pageNum}&&per_page=${limit}&&client_id=${CLIENT_ID}`
    return fetch(PHOTOS_URL)
        .then( response =>{
            return response.json();
        })
}

export const GET_PHOTO = photoId => {
    const PHOTO_URL = `${API_URL}${photoId}/?client_id=${CLIENT_ID}`
    return fetch(PHOTO_URL)
        .then( response =>{
            return response.json();
        })
}
