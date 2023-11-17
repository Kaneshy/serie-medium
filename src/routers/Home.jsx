import React from 'react'
import './styles/Home.css'
import { NavLink } from 'react-router-dom'


export const HomePage = () => {
  return (
    <section className='home-container' >
        <h1>Medium</h1>
        <div className='home-div-grid' >
            <NavLink className='navlink' to={'/videos'} > Temporada 5 </NavLink>
        </div>
        <div className='home-div-grid' >
            <NavLink className='navlink' to={'/videos2'} > Temporada 6 </NavLink>
        </div>
        <div className='home-div-grid' >
            <NavLink className='navlink' to={'/videos3'} > Temporada 7 </NavLink>
        </div>
    </section>
  )
}
