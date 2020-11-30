import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { ICard, IMovie } from '../../interfaces';
import { AppState } from '../../redux/reducers/rootReducer';
import FavMovie from '../FavMovie';
import './Favourites.scss';
import { Row, Col, Radio, Space } from 'antd';
const Favourites = () => {
  const [all, setAll] = useState(false);
  const [movie, setMovie] = useState(false);
  const [series, setSeries] = useState(true);
  const { favourites } = useSelector((state: AppState) => state.movie);
  return (
    <Fragment>
      <Col style={{ width: '100%' }}>
        <Row className="section-header">
          <Space direction="vertical" align="center">
            <h1>Your {movie ? 'Favourite Movies' : series ? 'Favourite Series' : 'Movie Library'}</h1>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button
                className="radio"
                value="a"
                onChange={() => {
                  setAll(true);
                  setMovie(false);
                  setSeries(false);
                }}
              >
                Show All
              </Radio.Button>
              <Radio.Button
                className="radio"
                value="b"
                onChange={() => {
                  setAll(false);
                  setMovie(true);
                  setSeries(false);
                }}
              >
                Movies
              </Radio.Button>
              <Radio.Button
                className="radio"
                value="c"
                onChange={() => {
                  setAll(false);
                  setMovie(false);
                  setSeries(true);
                }}
              >
                Series
              </Radio.Button>
            </Radio.Group>
          </Space>
        </Row>
        <Row>
          {favourites.map((fav: IMovie) => (all ? <FavMovie Title={fav.Title} Poster={fav.Poster} favourites={favourites} fav={fav} imdbID={fav.imdbID} /> : null))}
          {favourites.map((fav: IMovie) => (movie ? fav.Type === 'movie' ? <FavMovie Title={fav.Title} Poster={fav.Poster} favourites={favourites} fav={fav} imdbID={fav.imdbID} /> : null : null))}
          {favourites.map((fav: IMovie) => (series ? fav.Type === 'series' ? <FavMovie Title={fav.Title} Poster={fav.Poster} favourites={favourites} fav={fav} imdbID={fav.imdbID} /> : null : null))}
        </Row>
      </Col>
    </Fragment>
  );
};
export default Favourites;
