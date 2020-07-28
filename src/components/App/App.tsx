import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//styles
import { Layout, Row, Drawer } from 'antd';
import './App.scss';
//components
import Favourites from '../Favourites';
import MovieInfo from '../MovieInfo';
import Navigation from '../Navigation';
import AppBar from '../AppBar';
const { Sider } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    onClose();
  };
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };
  const onClose = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <div className="AppWrapper" style={{ height: '100vh' }}>
        <AppBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} onCollapse={onCollapse} />

        <Layout className="layout">
          <Sider trigger={null} collapsible collapsed={true}>
            <Navigation collapsed={false} />
          </Sider>
          <Layout className="max-height">
            <Drawer placement="left" closable={false} onClose={onClose} visible={!collapsed} key="left" className="drawer-padding">
              <Navigation collapsed={collapsed} toggleCollapsed={toggleCollapsed} onCollapse={onCollapse} style={{ background: '#141414' }}>
                Hello
              </Navigation>
            </Drawer>
            <Route exact path="/">
              <Row justify="center" align="middle" className="center">
                <MovieInfo />
              </Row>
            </Route>
            <Route path="/favourites">
              {' '}
              <Row style={{ width: '100%' }}>
                <Favourites />
              </Row>
            </Route>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
