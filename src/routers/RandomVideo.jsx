import './styles/Home.css'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { videoContext } from '../context/videoContext'



export const RandomVideo = (props) => {

    const { showVideoA } = useContext(videoContext)

    return (
            <section className='home-container' >
                <h1>CAPITULOS</h1>
                {props.value.map((x) => {
                    let { id } = x
                    return (
                        <div key={id} to='/tarjet' className="home-div-grid">
                            <NavLink to='/videosA' className='navlink' onClick={() => showVideoA(x)} key={id}  >
                                Capitulo {id}
                            </NavLink>
                        </div>
                    )
                })}
            </section>
    )
}