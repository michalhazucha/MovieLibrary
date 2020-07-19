import { ActionTypes } from '../types';
import { IMovie } from '../../../interfaces';

export const setNameAction = (e: React.ChangeEvent<HTMLInputElement>) => {
  return { type: ActionTypes.setName, payload: e.target.value };
};
export const getNameAction = (name: any, favourites: Array<IMovie>) => {
  console.log(name)
  return {
    type:ActionTypes.getName,
    payload:name,
    favourites
  }
}
export const fetchDataAction = (data: IMovie) => {
  return {
    type: ActionTypes.fetchData,
    payload: data
  }
}
export const addFavourite = (movie: IMovie | any) => {
  console.log(`Adding ${movie.Title}`);
  return {
    type: ActionTypes.addFavourite,
    movie,
  };
};
export const removeFavourite = (movie: IMovie | any) => {
  return {
    type: ActionTypes.removeFavourite,
    movie,
  }
}
export const toggleFavAction = (favourites: Array<IMovie>, movie: IMovie | any) => {
 return {
    type: ActionTypes.toggleFavourite,
    favourites,
    movie,
  };
}
