import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMovieInfo } from './../../../interfaces'
import { toggleFavAction } from './../../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from './../../../redux/reducers/rootReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
//styles
import { Layout,Row,Col,Card,Typography,Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const {Title,Text}=Typography
const Movie = (props: IMovieInfo) => {
  const dispatch = useDispatch();
    const {movie } = useSelector((state: AppState) => state.movie);
    const { favourites } = useSelector((state: AppState) => state.movie);
     const hadleToggleFavourites = () => {
     dispatch(toggleFavAction(favourites, movie));
     };
  return (
    <Card>
      <Row>
        <Col><img src={props.Poster} alt={props.Title} /></Col>
      <Col>

        <Header><h1>{props.Title}</h1></Header>
          <Layout>
            <Content style={{ margin: "1rem" }}>  
               <Title level={4}>Plot</Title><Text>{props.Plot}</Text>
                <Title level={4}>Type:</Title><Text>{props.Type}</Text>
                <Title level={4}>Director: </Title><Text>{props.Director}</Text>
                <Title level={4}>Writer: </Title><Text>{props.Writer}</Text>
                <Title level={4}>Actors: </Title><Text>{props.Actors}</Text>
                <Title level={4}>Awards:</Title><Text>{props.Awards}</Text>
               </Content>
              
          
        <Footer> <span onClick={hadleToggleFavourites}>{favourites.find((fav: IMovieInfo) => fav.imdbID === props.imdbID) ? <FontAwesomeIcon icon={faStar} size="lg" color="#eec643" /> : <FontAwesomeIcon icon={faStar} size="lg" color="#5c5c5c" />}</span></Footer></Layout>
        
      </Col>
      </Row>
     
    </Card>
    
  
  ) 
}
export default Movie