import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ICard } from '../../interfaces';


const Card = ({ Title, Poster, favourites, fav }: ICard) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <img src={Poster} alt={Title} />
      <h1>{Title}</h1>
      <button color="#E54B4B" onClick={() =>dispatch( toggleFavAction(favourites, fav))} >Toggle</button>
    </Fragment>
  )
}
export default Card