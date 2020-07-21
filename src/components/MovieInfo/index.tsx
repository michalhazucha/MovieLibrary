import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import Movie from '../Movie';
const MovieInfo = () => {
  const dispatch = useDispatch();
    const {movie } = useSelector((state: AppState) => state.movie);
    const { favourites } = useSelector((state: AppState) => state.movie);
     const hadleToggleFavourites = () => {
     dispatch(toggleFavAction(favourites, movie));
   };
  return (
    <Fragment>
      <Movie
        Title={movie.Title}
        Poster={movie.Poster}
        Plot={movie.Plot}
        Type={movie.Type}
        Director={movie.Director}
        Writer={movie.Writer}
        Actors={movie.Actors}
        Awards={movie.Awards}
        imdbID={movie.imdbID}
  />
    </Fragment>
  )
}
export default MovieInfo