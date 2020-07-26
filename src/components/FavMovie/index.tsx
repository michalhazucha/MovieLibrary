import React from 'react'
import { useDispatch } from 'react-redux';
import { getNameAction, toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ICard, IMovieInfo } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Button,Card,message,Typography } from 'antd';
import './FavMovie.scss'

const {Text} =Typography
const FavMovie = ({ Title, Poster, favourites, fav, imdbID }: ICard) => {
  const dispatch = useDispatch();
   const history = useHistory();
  const navigateTo = () => history.push('/');
   const success = (content:string) => {
  message.success(`Movie was successfully ${content} favourites`);
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
      <Text className="movie-title">{fav.Title}</Text>
     </div>
  <div className="favourite-movie-buttons">
  <Button type="text"  onClick={handleHistory}><FontAwesomeIcon icon={faEllipsisH} color="#f7f7ff" /></Button>
  <Button type="text" color="#E54B4B" onClick={handleToggleFavourites} > <FontAwesomeIcon icon={faStar} size="lg" color={favourites.find((fav: IMovieInfo) => fav.imdbID === imdbID) ? "#eec643" : "#5c5c5c"} /></Button></div>
        </div>
      </div>}></Card>
  )
}
export default FavMovie