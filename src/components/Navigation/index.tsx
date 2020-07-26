import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHeart,faFilm,faTimes} from '@fortawesome/free-solid-svg-icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import './Navigation.scss';
const { SubMenu } = Menu;
const Navigation = (props: any) => {
  return (
    <Menu className="menu-wrapper">
      {props.children ? <MenuItem key="0" icon={<FontAwesomeIcon icon={props.collapsed? faBars:faTimes} size="lg" />} onClick={props.toggleCollapsed}></MenuItem> :''}
        <MenuItem key="1" icon={<FontAwesomeIcon icon={faFilm} color="#474747"  size="lg" style={{ marginRight: '2.5rem' }} />}><Link to="/">MovieInfo</Link></MenuItem>
        <MenuItem key="2" icon={<FontAwesomeIcon icon={faHeart} color="#474747" size="lg" style={{ marginRight: '2.5rem' }} />}><Link to="/favourites">Favourites</Link></MenuItem>
      </Menu>

  )
}
export default Navigation;