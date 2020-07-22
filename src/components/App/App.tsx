import React, { useEffect, ChangeEvent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch,  } from 'react-redux';
import {AppState} from '../../redux/reducers/rootReducer'
import { toggleFavAction } from '../../redux/actions/actionCreators/movieActionCreators';

//styles
import './App.scss';
//components
import Searcher from '../Search'
import Favourites from '../Favourites'
import MovieInfo from '../MovieInfo'
import Navigation from '../Navigation'
const App=()=> {
  return (
    <Router>
      <Navigation/>
      <Searcher />
      <div>  <Route exact path="/"><MovieInfo /></Route>
      <Route path="/favourites"><Favourites/></Route></div>
    </Router>
  );
}

export default App;
