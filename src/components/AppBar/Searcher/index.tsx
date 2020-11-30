import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppState } from '../../../redux/reducers/rootReducer';
import { getNameAction, setNameAction } from '../../../redux/actions/actionCreators/movieActionCreators';
import { setName } from '../../../handlers/handlers';
//styles
import './Searcher.scss';
import { Input } from 'antd';
const { Search } = Input;
const Searcher = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state: AppState) => state.movie);
  const history = useHistory();
  const [movieName, setMovieName] = useState('');
  const [defPlaceholder, setdefPlaceholder] = useState('Search Your Movie Here');
  const navigateTo = () => history.push('/');
  const handleSearch = () => {
    dispatch(getNameAction(movieName, favourites));
    setName(dispatch, movieName);
    navigateTo();
  };

  return <Search placeholder={defPlaceholder} onChange={(e) => setMovieName(e.target.value)} onSearch={handleSearch} className="search" />;
};

export default Searcher;
