import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMovieInfo } from './../../../interfaces'
import { toggleFavAction } from './../../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from './../../../redux/reducers/rootReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
//styles
import './Movie.scss'
import { Layout,Row,Col,Space,Card,Typography,Button,message } from 'antd';
const {Content } = Layout;
const {Title,Text}=Typography
const Movie = (props: IMovieInfo) => {
  const dispatch = useDispatch();
    const {movie } = useSelector((state: AppState) => state.movie);
    const { favourites } = useSelector((state: AppState) => state.movie);
     const hadleToggleFavourites = () => {
       dispatch(toggleFavAction(favourites, movie));
        favourites.find((fav: IMovieInfo) => fav.imdbID === props.imdbID) ? success('removed from'): success('added to')
     };
  const success = (content:string) => {
  message.success(`Movie was successfully ${content} favourites`);
};
  return (
    <Card  className="movie-info">
      <Row>
        <Col xs={24} md={6} >
          <Row><img src={props.Poster} alt={props.Title} /></Row>
          <Row> <Space className="center margin-lg"><Button type="text" onClick={hadleToggleFavourites}><FontAwesomeIcon icon={faStar} size="lg" className="font-size-lg" color={favourites.find((fav: IMovieInfo) => fav.imdbID === props.imdbID) ? "#eec643" : "#5c5c5c"} /></Button></Space></Row>
        </Col>
        <Col xs={24} md={18} className="padding-x-low">
          <Row>
            <Layout > 
              <Content className="movie-info-content">  
                <Title level={1}>{props.Title}</Title>
               <Title level={4}>Plot</Title><Text>{props.Plot}</Text>
                <Title level={4}>Type:</Title><Text>{props.Type}</Text>
                <Title level={4}>Director: </Title><Text>{props.Director}</Text>
                <Title level={4}>Writer: </Title><Text>{props.Writer}</Text>
                <Title level={4}>Actors: </Title><Text>{props.Actors}</Text>
                <Title level={4}>Awards:</Title><Text>{props.Awards}</Text>
             </Content>
       
          </Layout>
          </Row> 
     </Col>
        
      </Row>
     
    </Card>
  
  
  ) 
}
export default Movie