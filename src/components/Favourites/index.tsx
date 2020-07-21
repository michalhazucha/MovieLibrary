import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMovie } from '../../interfaces'
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from '../../redux/reducers/rootReducer';
const Favourites = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state: AppState) => state.movie);
  const { favourites } = useSelector((state: AppState) => state.movie);
  return (
    <div>
      <h1>Favourites</h1>
        {favourites.map((fav: IMovie) => (
          <div style={{border:'#000'}}>
            <img src={fav.Poster} alt={fav.Title} />
            <h1>{fav.Title}</h1>

            <button color="#E54B4B" onClick={() =>dispatch( toggleFavAction(favourites, fav))} >Toggle</button>
          </div>
        ))}
      </div>

  )
}
export default Favourites