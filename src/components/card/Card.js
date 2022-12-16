import { Link } from 'react-router-dom';
import "./Card.css";

export const Card=({id, name, description, image, staffList})=>{

    const viewMovie = ()=>{
        console.log("El nombre de la película es",name)
    }

    return(
        <div className="card">
            <img src={image} alt="Imagen no encontrada" />
            <div className="container">
                <h4><b>{name}</b></h4> 
                {/*<button className= 'btn' onClick={viewMovie}>Ver</button>*/}
                <Link className='btn' to={`/movie/${id}`}>Ver</Link>
            </div>
        </div>
    )
}