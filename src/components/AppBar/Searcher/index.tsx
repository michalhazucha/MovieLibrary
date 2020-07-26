import React,{ChangeEvent,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from '../../../redux/reducers/rootReducer'
import { getNameAction, setNameAction } from '../../../redux/actions/actionCreators/movieActionCreators';
import { useHistory } from 'react-router-dom';
//styles
import { Input } from 'antd';
const { Search } = Input;
const Searcher = () => {
  const dispatch = useDispatch(); 
  const {favourites } = useSelector((state: AppState) => state.movie);
  const history = useHistory();
  const [movieName, setMovieName] = useState();
  
  const navigateTo = () => history.push('/');
  const handleSetName = (e: ChangeEvent<HTMLInputElement>|any) => {
    dispatch(setNameAction(e));
  };
  const handleSearch = () => {
    dispatch(getNameAction(movieName, favourites));
    handleSetName(movieName);
     navigateTo();   
  };

   return (
     <Search
       placeholder="input search text"
       onChange={(e)=>setMovieName(e.target.value)}
      onSearch={handleSearch}
      style={{ border: 'none' }}
    />
  )
}

export default Searcher