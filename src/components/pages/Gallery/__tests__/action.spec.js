import {
    setFavoriteAction, 
    setPhotosAction,
    SET_FAVORITE,
    SET_PHOTOS
} from '../redux/actions';
import {photos} from '../mock';

test('should return SET_PHOTOS action', () => {
    expect(setPhotosAction(photos)).toEqual({
        type: SET_PHOTOS,
        photos,    
    });
  });

  test('should return SET_FAVORITE action', () => {
    expect(setFavoriteAction(photos[0])).toEqual({
        type: SET_FAVORITE,
        photos: photos[0],    
    });
  });