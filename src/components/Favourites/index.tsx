import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMovie } from '../../interfaces'
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from '../../redux/reducers/rootReducer';
const Favourites = () => {

  const dispatch = useDispatch();
    const { movie } = useSelector((state: AppState) => state.movie);
  const { favourites } = useSelector((state: AppState) => state.movie);
    const hadleToggleFavourites = () => {
    dispatch(toggleFavAction(favourites, movie));
  };
  return (
    <Fragment>
      <h1>Favourites</h1>
      <div>
        {favourites.map((fav: IMovie) => (
          <div style={{border:'#000'}}>
            <img src={fav.Poster} alt={fav.Title} />
            <h1>{fav.Title}</h1>
            <button  >
            <span color="#E54B4B" onClick={() =>dispatch( toggleFavAction(favourites, fav))} >Toggle</span>
          </button>
          </div>
        ))}
      </div>
    </Fragment>
  )
}
export default Favourites