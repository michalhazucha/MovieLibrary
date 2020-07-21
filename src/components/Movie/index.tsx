import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMovieInfo } from '../../interfaces'
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from '../../redux/reducers/rootReducer';

const Movie = ({
  Title,
  Poster,Plot,Type,Actors,Director,Writer,Awards,imdbID }: IMovieInfo) => {
  const dispatch = useDispatch();
    const {movie } = useSelector((state: AppState) => state.movie);
    const { favourites } = useSelector((state: AppState) => state.movie);
     const hadleToggleFavourites = () => {
     dispatch(toggleFavAction(favourites, movie));
   };
  return (
    <Fragment>
      <img src={Poster} alt={Title}/>
      <h1>{Title}</h1>
      <p>{Plot}</p>
      <h5>Type: {Type}</h5>
      <h5>Director: {Director}</h5>
      <h5>Writer: {Writer}</h5>
      <h5>Actors: {Actors}</h5>
      <h5>Awards: {Awards}</h5>
      <button onClick={hadleToggleFavourites}>Toggle</button>
    </Fragment>
  )
}
export default Movie