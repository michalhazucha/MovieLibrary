import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import Movie from './Movie';
import Searcher from '../AppBar/Searcher/index'
import { Row, Col, Space, Typography } from 'antd';
import './MovieInfo.scss';
import Message from '../Message';
const {Title, Text} =Typography
const MovieInfo = () => {
    const {movie } = useSelector((state: AppState) => state.movie);
  return (
    (movie.Title !== undefined) ? <Row>
        <Movie
          Title={movie.Title}
          Poster={movie.Poster}
          Plot={movie.Plot}
          Type={movie.Type}
          Director={movie.Director}
          Writer={movie.Writer}
          Actors={movie.Actors}
          Awards={movie.Awards}
          imdbID={movie.imdbID}
        />
    </Row> : 
        
        <Row> <Space direction="vertical">
        <Title level={1}className="text-welcome text-center" > Welcome to our Movie Library</Title>
        <Title level={3}>Type your favourite movie UP in a searchbar and create your own Movie Library</Title>
          </Space></Row>
         
     
  )
}
export default MovieInfo