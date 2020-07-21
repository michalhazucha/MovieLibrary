import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ICard, IMovie, IMovieInfo } from '../../interfaces'
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from '../../redux/reducers/rootReducer';
import Card from '../Card'
const Favourites = () => {
  const { favourites } = useSelector((state: AppState) => state.movie);
  return (
    <div>
      <h1>Favourites</h1>
      {favourites.map((fav: ICard) => (
        <Card Title={fav.Title} Poster={fav.Poster} favourites={favourites} fav={fav} />
        ))}
      </div>

  )
}
export default Favourites