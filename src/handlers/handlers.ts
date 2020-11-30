import { ChangeEvent } from 'react';
import {} from 'react-redux';
import { getNameAction, toggleFavAction, setNameAction } from '../redux/actions/actionCreators/movieActionCreators';
import { IMovie, Dispatch } from '../interfaces';
import { message } from 'antd';

export const History = (dispatch: Dispatch | any, history: any, movieTitle: String, movieArray: Array<IMovie>) => {
  const navigateTo = () => history.push('/');
  dispatch(getNameAction(movieTitle, movieArray));
  navigateTo();
  return;
};

const success = (content: string) => {
  message.success(`Movie was successfully ${content} favourites`);
};

export const ToggleFavourites = (dispatch: Dispatch | any, movieArray: Array<IMovie>, movie: IMovie, imdbID: String) => {
  dispatch(toggleFavAction(movieArray, movie));
  movieArray.find((movie: IMovie) => movie.imdbID === imdbID) ? success('removed from') : success('added to');
};
export const setName = (dispatch: Dispatch | any, e: ChangeEvent<HTMLInputElement> | any) => {
  dispatch(setNameAction(e));
};
