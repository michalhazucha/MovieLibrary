import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
const MovieInfo = () => {
  const dispatch = useDispatch();
    const {movie } = useSelector((state: AppState) => state.movie);
    const { favourites } = useSelector((state: AppState) => state.movie);
     const hadleToggleFavourites = () => {
     dispatch(toggleFavAction(favourites, movie));
   };
  return (
    <Fragment>
      <img src={movie.Poster} alt={movie.Name}/>
        <h1>{movie.Title}</h1>
         <button onClick={hadleToggleFavourites}>Toggle</button>
    </Fragment>
  )
}
export default  MovieInfo