import React  from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';




//styles
import { Layout, Menu, Breadcrumb, Space, Button } from 'antd';
import './App.scss';
//components
import Searcher from '../AppBar/Searcher'
import Favourites from '../Favourites'
import MovieInfo from '../MovieInfo'
import Navigation from '../Navigation'
import AppBar from '../AppBar'
const { Header, Content, Footer, Sider } = Layout;
const App=()=> {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <AppBar />
        <Layout>
          <Sider>
            <Navigation />
          </Sider>
     
          <Space direction="horizontal" align="baseline">
            <Route exact path="/"><MovieInfo /></Route>
            <Route path="/favourites"><Favourites/></Route>
          </Space>
        </Layout>
      
      </Layout>
      
    </Router>
  );
}

export default App;
