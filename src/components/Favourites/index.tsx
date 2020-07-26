import React, { Fragment } from 'react'
import {  useSelector } from 'react-redux';
import { ICard } from '../../interfaces'
import { AppState } from '../../redux/reducers/rootReducer';
import FavMovie from '../FavMovie'
import './Favourites.scss';
import {Row,Col } from 'antd';
const Favourites = () => {
  const { favourites } = useSelector((state: AppState) => state.movie);
  return (
    <Fragment>
      <Row >
        <Col> <Row className="section-header"><h1>Favourite Movies</h1></Row>
        <Row>{favourites.map((fav: ICard) => (
        <FavMovie Title={fav.Title} Poster={fav.Poster} favourites={favourites} fav={fav} imdbID={fav.imdbID}/>
        ))}</Row></Col>
 
 </Row></Fragment>

  )
}
export default Favourites