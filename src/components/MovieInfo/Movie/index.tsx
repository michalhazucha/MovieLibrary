import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMovieInfo } from './../../../interfaces'
import { toggleFavAction } from './../../../redux/actions/actionCreators/movieActionCreators';
import { AppState } from './../../../redux/reducers/rootReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
//styles
import { Layout,Row,Col,Card,Typography,Button } from 'antd';
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
        <Col span={6}><img src={props.Poster} alt={props.Title} /></Col>
        <Col span={18}>
       <Header><Title>{props.Title}</Title></Header>
          <Row>
            <Layout>
            <Content style={{ padding: "1rem" }}>  
               <Title level={4}>Plot</Title><Text>{props.Plot}</Text>
                <Title level={4}>Type:</Title><Text>{props.Type}</Text>
                <Title level={4}>Director: </Title><Text>{props.Director}</Text>
                <Title level={4}>Writer: </Title><Text>{props.Writer}</Text>
                <Title level={4}>Actors: </Title><Text>{props.Actors}</Text>
                <Title level={4}>Awards:</Title><Text>{props.Awards}</Text>
             </Content>
        <Footer> <Button type="text" onClick={hadleToggleFavourites}>{favourites.find((fav: IMovieInfo) => fav.imdbID === props.imdbID) ? <FontAwesomeIcon icon={faStar} size="lg" color="#eec643" /> : <FontAwesomeIcon icon={faStar} size="lg" color="#5c5c5c" />}</Button></Footer>
          </Layout>
          </Row> 
     </Col>
        
      </Row>
     
    </Card>
  
  
  ) 
}
export default Movie