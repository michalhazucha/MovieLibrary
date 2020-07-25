import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ICard, IMovie, IMovieInfo } from '../../interfaces'
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from '../../redux/reducers/rootReducer';
import FavMovie from '../FavMovie'
import {Layout,Row, Typography,Col } from 'antd';
const { Title } =Typography 
const Favourites = () => {
  const { favourites } = useSelector((state: AppState) => state.movie);
  return (
    <Fragment>

      <Row justify="start">
        <Col> <Row><h1>My List</h1></Row>
        <Row>{favourites.map((fav: ICard) => (
        <FavMovie Title={fav.Title} Poster={fav.Poster} favourites={favourites} fav={fav} imdbID={fav.imdbID}/>
        ))}</Row></Col>
 
 </Row></Fragment>

  )
}
export default Favourites