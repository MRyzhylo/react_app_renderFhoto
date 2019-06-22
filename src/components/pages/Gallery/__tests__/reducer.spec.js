import Reducer, { initialState } from '../redux/reducer';
import { photos } from '../mock'

test('should return initialState', () => {
    expect(Reducer(initialState, {})).toEqual({
        photos: [],    
    });
  });

  test('should return set photos to state', () => {
      const action = {type: 'SET_PHOTOS', photos}
    expect(Reducer(undefined, action))
    .toEqual({
        ...initialState,
        photos
    });
  });
