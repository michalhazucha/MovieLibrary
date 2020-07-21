import React, { Fragment } from 'react'
import {ActionTypes} from '../../redux/actions/types'
import { useSelector,useDispatch } from 'react-redux';
import { getNameAction, toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ICard, IMovieInfo } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const Card = ({ Title, Poster, favourites, fav, imdbID }: ICard) => {
  const history = useHistory();
  const navigateTo = () => history.push('/');
  const dispatch = useDispatch();
  const handleHistory = () => {
    dispatch(getNameAction(fav.Title, favourites));
       navigateTo();   
 }
  return (
    <Fragment>
      <div><img src={Poster} alt={Title} />
        <h1>{Title}</h1>
        <div>
          <button  onClick={handleHistory}><FontAwesomeIcon icon={faEllipsisH} color="#f7f7ff" /></button>
          <button color="#E54B4B" onClick={() => dispatch(toggleFavAction(favourites, fav))} >{favourites.find((fav: IMovieInfo) => fav.imdbID === imdbID) ? <FontAwesomeIcon icon={faStar} size="lg" color="#eec643" /> : <FontAwesomeIcon icon={faStar} size="lg" color="#5c5c5c" />}</button>
        </div>
        
        
      </div>
      
    </Fragment>
  )
}
export default Card