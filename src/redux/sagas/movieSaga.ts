import { put, call, takeEvery, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataAction, removeFavourite, addFavourite } from '../actions/actionCreators/movieActionCreators';
import { ActionTypes } from '../actions/types';
import { IMovie } from '../../interfaces';

function* onToggleMovie({ favourites, movie }: any) {
  try {
    console.log(favourites);
    if (favourites.find((fav: IMovie) => fav.imdbID === movie.imdbID)) {
      yield put(removeFavourite(movie));
    } else {
      yield put(addFavourite(movie));
    }
  } catch (e) {
    yield put({ type: 'TOGGLE_MOVIE_FAILED', message: e.message });
  }
}
function* onLoadMovie({ payload, favourites }: any) {
  try {
    if (favourites.find((fav: IMovie) => fav.Title === payload)) {
      const movie = favourites.find((fav: IMovie) => fav.Title === payload);
      yield put(fetchDataAction(movie));
    } else {
      const APIKEY = 'b803f734&t';
      const URL = `https://www.omdbapi.com/?apikey=${APIKEY}=${payload.toLowerCase().replace(/ /g, '+')}`;
      const { data } = yield axios.get(URL);
      yield put(fetchDataAction(data));
    }
  } catch (e) {
    yield put({ type: 'MOVIE_LOAD_FAILED', message: e.message });
  }
}


function* watchOnLoadMovie() {
  yield takeEvery(ActionTypes.getName, onLoadMovie);
}
 function* watchOnToggleMovie() {
   yield takeEvery(ActionTypes.toggleFavourite, onToggleMovie);
 }
function* movieSaga() {
  yield all([fork(watchOnLoadMovie),fork(watchOnToggleMovie)]);
}
export default function* rootSaga() {
  yield all([fork(movieSaga)]);
}
