import React, { useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from '../../redux/reducers/rootReducer'
import { addFavourite, getNameAction,setNameAction,toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ActionTypes } from '../../redux/actions/types';
import { IMovie } from '../../interfaces'
//styles
import './App.scss';
//components
import Search from '../Search'

function App() {
  const dispatch = useDispatch();
  const { name } = useSelector((state: AppState) => state.movie);
    const {movie } = useSelector((state: AppState) => state.movie);
  const {favourites } = useSelector((state: AppState) => state.movie);
  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameAction(e));
  };
  const handleSearch = () => {
    dispatch(getNameAction(name, favourites));
    console.log(`this is a movie name ${name}`)
  };
    const handleToggle = () => {
    dispatch(toggleFavAction(favourites,movie));
  };
  return (
    <div className="App">
      <Search/>
      <button onClick={handleToggle}>Toggle</button>
      <div>
        <img src={movie.Poster} alt={movie.Name}/>
        <h1>{movie.Title}</h1>
      </div>
      Favourites
      <div>
        {favourites.map((fav: IMovie) => (
          <div>
            <img src={fav.Poster} alt={fav.Title} />
            <h1>{fav.Title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
