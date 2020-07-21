import React, { useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from '../../redux/reducers/rootReducer'
import { addFavourite,toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ActionTypes } from '../../redux/actions/types';
import { IMovie } from '../../interfaces'
//styles
import './App.scss';
//components
import Search from '../Search'
import Favourites from '../Favourites'

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
      <div>
        <img src={movie.Poster} alt={movie.Name}/>
        <h1>{movie.Title}</h1>
         <button onClick={hadleToggleFavourites}>Toggle</button>
      </div>
      <Favourites/>
    </div>
  );
}

export default App;
