import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { IMovie,ICard } from '../../interfaces';


const Card = ({ Title, Poster, favourites, fav }: ICard) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div style={{border:'#000'}}>
            <img src={fav.Poster} alt={fav.Title} />
            <h1>{fav.Title}</h1>
            <button color="#E54B4B" onClick={() =>dispatch( toggleFavAction(favourites, fav))} >Toggle</button>
          </div>
    </Fragment>
  )
}
export default Card