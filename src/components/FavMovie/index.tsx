import React, { Fragment } from 'react'
import {ActionTypes} from '../../redux/actions/types'
import { useSelector,useDispatch } from 'react-redux';
import { getNameAction, toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ICard, IMovieInfo } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Row,Space,Button,Card,message,Typography } from 'antd';
import Favourites from '../Favourites';
import './FavMovie.scss'

const {Text} =Typography
const {Meta} = Card
const FavMovie = ({ Title, Poster, favourites, fav, imdbID }: ICard) => {
  const dispatch = useDispatch();
   const history = useHistory();
  const navigateTo = () => history.push('/');
   const success = (content:string) => {
  message.success(`Movie was successfully ${content} `);
};
  const handleHistory = () => {
    dispatch(getNameAction(fav.Title,favourites,));
    navigateTo();
  }
const handleToggleFavourites = () => {
       dispatch(toggleFavAction(favourites, fav));
       favourites.find((fav: IMovieInfo) => fav.imdbID === imdbID) ? success('removed from'): success('added to')
     };
  return (
    <Card className="favourite-movie-card"
cover={<div className="favourite-movie-body">
  <img src={Poster} alt={Title} className="ant-card-img" />
  <div className="favourite-movie-hover">
    <div className="favourite-movie-info">
      <Text className="movie-title">{fav.Title}</Text></div>
  <div className="favourite-movie-buttons">
  <Button type="text"  onClick={handleHistory}><FontAwesomeIcon icon={faEllipsisH} color="#f7f7ff" /></Button>
  <Button type="text" color="#E54B4B" onClick={handleToggleFavourites} > <FontAwesomeIcon icon={faStar} size="lg" color={favourites.find((fav: IMovieInfo) => fav.imdbID === imdbID) ? "#eec643" : "#5c5c5c"} /></Button></div>
        </div>
      </div>}></Card>
  )
}
export default FavMovie