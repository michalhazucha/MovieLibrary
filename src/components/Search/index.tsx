import React,{Fragment,ChangeEvent} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from '../../redux/reducers/rootReducer'
import {  getNameAction,setNameAction } from '../../redux/actions/actionCreators/movieActionCreators';
const Search = () => {
  const dispatch = useDispatch(); 
  const { name } = useSelector((state: AppState) => state.movie);
  const {favourites } = useSelector((state: AppState) => state.movie);
  
  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameAction(e));
  };
  const handleSearch = () => {
    dispatch(getNameAction(name, favourites));
    console.log(`this is a movie name ${name}`)
  };

   return (
    <Fragment>
      <input type="text" onChange={handleSetName}  ></input>
      <button onClick={handleSearch}>search</button>
    </Fragment>
  )
}

export default Search