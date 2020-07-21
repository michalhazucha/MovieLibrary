import { ActionTypes } from './redux/actions/types';

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    },
    {
      Source: string;
      Value: string;
    },
    {
      Source: string;
      Value: string;
    }
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
export interface IMovieInfo{
  Title?: string
  Year?: string
  Rated?: string
  Released?: string
  Runtime?: string
  Genre?: string
  Director?: string
  Writer?: string
  Actors?: string
  Plot?: string
  Language?: string
  Country?: string
  Awards?: string
  Poster?: string
  Type?: string
  BoxOffice?: string
  Production?: string
  Creator?: string
  imdbID?:string
}
export interface IMovieAction {
  type: ActionTypes.setName|ActionTypes.getName | ActionTypes.fetchData | ActionTypes.addFavourite | ActionTypes.removeFavourite;
  payload: Array<IMovie> | any;
}
export interface IState {
  name: string;
  movie: IMovie | any;
  favourites: Array<IMovie> | any;
}
export interface NameState {
  name: string;
}

export interface ISetNameAction {
  readonly type: ActionTypes.setName;
  payload: string;
}
export interface ICard {
Title: string|any;
Poster: string|any;
favourites: Array<IMovie> | any;
fav: IMovie | any;
imdbID: string;
}
export type Dispatch = React.Dispatch<IMovieAction>;