import React from 'react'
import { Link } from 'react-router-dom'

const Route404 = () => {
  return (
    <React.Fragment>
      <h2>Uuupsz</h2>
      <p>A kért oldal nem található</p>
      <Link to="/">Vissza a kezdőoldalra</Link>
    </React.Fragment>
  )
}

export default Route404