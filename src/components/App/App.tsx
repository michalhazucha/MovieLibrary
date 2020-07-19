import React, { useEffect,ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNameAction,setNameAction } from '../../redux/actions/actionCreators/movieActionCreators';
import { ActionTypes } from '../../redux/actions/types';
import './App.scss';
import {AppState} from '../../redux/reducers/rootReducer'
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
  return (
    <div className="App">
        <input type="text" onChange={handleSetName}  ></input>
        <button onClick={handleSearch}>hello</button>
        {movie.Title}
    </div>
  );
}

export default App;
