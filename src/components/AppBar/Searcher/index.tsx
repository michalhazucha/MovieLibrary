import React,{Fragment,ChangeEvent} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from '../../../redux/reducers/rootReducer'
import { getNameAction, setNameAction } from '../../../redux/actions/actionCreators/movieActionCreators';
import { useHistory } from 'react-router-dom';
//styles
import { Input } from 'antd';
const { Search } = Input;
const Searcher = () => {
  const dispatch = useDispatch(); 
  const { name } = useSelector((state: AppState) => state.movie);
  const {favourites } = useSelector((state: AppState) => state.movie);
   const history = useHistory();
  const navigateTo = () => history.push('/');
  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameAction(e));
  };
  const handleSearch = () => {
    dispatch(getNameAction(name, favourites));
     navigateTo();   
  };

   return (
     <Search
       placeholder="input search text"
       onChange={handleSetName}
      onSearch={handleSearch}
      style={{ border: 'none' }}
    />
  )
}

export default Searcher