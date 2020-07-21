import React, { useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from '../../redux/reducers/rootReducer'
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';

//styles
import './App.scss';
//components
import Search from '../Search'
import Favourites from '../Favourites'
import MovieInfo from '../MovieInfo'
function App() {
  const dispatch = useDispatch();
    const {movie } = useSelector((state: AppState) => state.movie);
    const { favourites } = useSelector((state: AppState) => state.movie);
     const hadleToggleFavourites = () => {
     dispatch(toggleFavAction(favourites, movie));
   };
  return (
    <div className="App">
      <Search/>
      <MovieInfo/>
      <Favourites/>
    </div>
  );
}

export default App;
