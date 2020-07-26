import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import Movie from './Movie';
import { Row, Space, Typography } from 'antd';
import './MovieInfo.scss';
const { Title } = Typography;
const MovieInfo = () => {
  const { movie } = useSelector((state: AppState) => state.movie);
  const { name } = useSelector((state: AppState) => state.movie);
  if (movie.Response === 'True') {
    return (
      <Row>
        <Movie Title={movie.Title} Poster={movie.Poster} Plot={movie.Plot} Type={movie.Type} Director={movie.Director} Writer={movie.Writer} Actors={movie.Actors} Awards={movie.Awards} imdbID={movie.imdbID} />
      </Row>
    );
  } else if (movie.Response === 'False' && name !== '') {
    return (
      <Row>
        {' '}
        <Space direction="vertical">
          <Title level={1} className="text-welcome text-center">
            {' '}
            Ooops! <span>😯</span> This movie was not found
          </Title>
          <Title level={3}>
            Please check if you typed your movie Title Correctly or search for another movie <span>😊</span>{' '}
          </Title>
        </Space>
      </Row>
    );
  } else {
    return (
      <Row>
        <Space direction="vertical">
          <Title level={1} className="text-welcome text-center">
            Welcome to your Movie Library
          </Title>
          <Title level={3}>Type your favourite movie UP in a searchbar and create your Movie Library</Title>
        </Space>
      </Row>
    );
  }
};
export default MovieInfo;
