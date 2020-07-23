import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faFilm} from '@fortawesome/free-solid-svg-icons';
import MenuItem from 'antd/lib/menu/MenuItem';

const { SubMenu } = Menu;
const Navigation = (props: any) => {
  return (

      <Menu>
        <MenuItem key="1" icon={<FontAwesomeIcon icon={faFilm} color="#474747"  size="lg" style={{ marginRight: '2.5rem' }} />}><Link to="/">MovieInfo</Link></MenuItem>
        <MenuItem key="2" icon={<FontAwesomeIcon icon={faHeart} color="#474747" size="lg" style={{ marginRight: '2.5rem' }} />}><Link to="/favourites">Favourites</Link></MenuItem>
      </Menu>

  )
}
export default Navigation;