import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../redux/reducers/rootReducer';
//components
import './AppBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faHeart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Layout, PageHeader, Space, Row, Col, Divider, Badge } from 'antd';
import Searcher from './Searcher';
//styles

const { Sider } = Layout;
const AppBar = ({ toggleCollapsed, collapsed }: any) => {
  const { favourites } = useSelector((state: AppState) => state.movie);
  console.log(collapsed);
  return (
    <PageHeader className="site-page-header" title="">
      <Row>
        <Col span={8} onClick={toggleCollapsed}>
          {collapsed ? <FontAwesomeIcon icon={faBars} size="lg" /> : <FontAwesomeIcon icon={faTimes} size="lg" />}
        </Col>
        <Col span={8}>
          <Searcher />
        </Col>
        <Col span={8}>
          <Row>
            <Col span={16}></Col>
            <Col span={8}>
              <Link to="/favourites">
                <Badge count={favourites.length} offset={[5, -5]}>
                  <FontAwesomeIcon icon={faHeart} color="#e54b4b" size="lg" />
                </Badge>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageHeader>
  );
};

export default AppBar;
