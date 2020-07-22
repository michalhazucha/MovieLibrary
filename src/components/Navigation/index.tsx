import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Button, Layout, Space } from 'antd';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHeart, faHeartbeat, faFilm } from '@fortawesome/free-solid-svg-icons';
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;
const Navigation = () => {
  return (

      <Menu>
        <MenuItem key="1" icon={<FontAwesomeIcon icon={faFilm} size="lg" style={{ marginRight: '2.5rem' }} />}><Link to="/">MovieInfo</Link></MenuItem>
        <MenuItem key="2" icon={<FontAwesomeIcon icon={faHeart} color="#e54b4b" size="lg" style={{ marginRight: '2.5rem' }} />}><Link to="/favourites">Favourites</Link></MenuItem>
      </Menu>

  )
}
export default Navigation;