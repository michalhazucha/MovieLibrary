import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <Fragment>
      <ul>
        <li><Link to="/">MovieInfo</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>
    </Fragment>
  )
}
export default Navigation;