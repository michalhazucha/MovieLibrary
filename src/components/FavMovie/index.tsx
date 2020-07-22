import React, { Fragment } from 'react'
import {ActionTypes} from '../../redux/actions/types'
import { useSelector,useDispatch } from 'react-redux';
import { getNameAction, toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ICard, IMovieInfo } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { Layout,Button,Card } from 'antd';
import Favourites from '../Favourites';
const {Meta} = Card
const FavMovie = ({ Title, Poster, favourites, fav, imdbID }: ICard) => {
  const history = useHistory();
  const navigateTo = () => history.push('/');
  const dispatch = useDispatch();
  const handleHistory = () => {
    dispatch(getNameAction(fav.Title, favourites));
       navigateTo();   
 }
  return (
    <Card hoverable cover={<img src={Poster} alt={Title} />}
    >
<Button type="text"  onClick={handleHistory}><FontAwesomeIcon icon={faEllipsisH} color="#f7f7ff" /></Button>
        <Button type="text" color="#E54B4B" onClick={() => dispatch(toggleFavAction(favourites, fav))} >{favourites.find((fav: IMovieInfo) => fav.imdbID === imdbID) ? <FontAwesomeIcon icon={faStar} size="lg" color="#eec643" /> : <FontAwesomeIcon icon={faStar} size="lg" color="#5c5c5c" />}</Button>

  
   </Card>
    

  )
}
export default FavMovie