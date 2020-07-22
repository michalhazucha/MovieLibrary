import React,{Fragment,ChangeEvent} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {AppState} from '../../redux/reducers/rootReducer'
import { getNameAction, setNameAction } from '../../redux/actions/actionCreators/movieActionCreators';
//styles
import { Input } from 'antd';
const { Search } = Input;
const Searcher = () => {
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
     <Search
       placeholder="input search text"
       onChange={handleSetName}
      onSearch={handleSearch}
      style={{ width: 200 }}
    />
  )
}

export default Searcher