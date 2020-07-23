import React,{Fragment,useState}  from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';




//styles
import { Layout, Row, Col,Space } from 'antd';
import './App.scss';
//components
import Favourites from '../Favourites'
import MovieInfo from '../MovieInfo'
import Navigation from '../Navigation'
import AppBar from '../AppBar'
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(true),
    toggleCollapsed = () => {
      setCollapsed(!collapsed);
      console.log('change icon');
    };
  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };



  return (
    <Router>
      <Fragment>
          <AppBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />  
        
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Navigation collapsed={collapsed} toggleCollapsed={toggleCollapsed} onCollapse={onCollapse}/>
          </Sider>
             <Route exact path="/"><Row justify="center" style={{width:"100%"}}><MovieInfo />  </Row></Route>
          <Route path="/favourites"> <Row style={{ width: "100%" }}>
            <Favourites />
          </Row>
          </Route>        
      </Layout>
    </Fragment>
      
    </Router>
  );
}

export default App;
