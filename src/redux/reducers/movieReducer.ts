import { IMovieAction, IState, IMovie } from '../../interfaces';
import { ActionTypes } from '../actions/types';
const initialState: IState = {
  name: '',
  movie: [],
  favourites: [],
};

const movieReducer = (state = initialState, action: IMovieAction) => {
  switch (action.type) {
    case ActionTypes.setName:
      return {
        ...state,
        name: action.payload,
      };
    case ActionTypes.getName:
      return { ...state, name: action.payload };
    case ActionTypes.fetchData:
      return { ...state, movie: action.payload };
    case ActionTypes.addFavourite:
      return { ...state, favourites: [...state.favourites, action.payload] };
    case ActionTypes.removeFavourite:
      return { ...state, favourites: [...state.favourites.filter((fav: IMovie) => action.payload.imdbID !== fav.imdbID)] };
    default:
      return state;
  }
};
export default movieReducer;