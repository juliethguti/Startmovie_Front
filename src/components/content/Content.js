import "./Content.css";
import { Card } from "../card/Card"
import { useEffect, useState } from "react";


export const Content = () => {

    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        //getMovies(); 
        getMoviesAsync();       
    },[])

    //Forma 2
    const getMoviesAsync = async()=>{
        let response = await fetch("http://localhost:8080/api/movie");
        response = await response.json();
        setMovies(response);
    };

    return (
        <div className="flex">
            {movies.map((movie, idx) => (
                <Card
                    key={idx}
                    name={movie.name}
                    description={!movie.description?"No hay sinopsis":movie.description}
                    staffList={movie.staffList}
                    image={
                        !movie.linkImage
                        ?"https://api.lorem.space/image?w=150&h=180"
                        :movie.linkImage
                    }
                    id={movie.id}
                />
            ))}
        </div>
    );
};

//Forma 1
    // const getMovies=()=>{
    //     fetch("http://localhost:8080/api/movie")
    //     .then(response=>response.json())
    //     .then(response => {
    //         console.log(response)
    //         setMovies(response)
    //     })
    // };

    // const moviesx = [
    //     {
    //         name: "Titanic",
    //         description: "Una película de amor",
    //         image: "https://api.lorem.space/image?w=150&h=180"
    //     },
    //     {
    //         name: "Terminator",
    //         description: "Una película de acción",
    //         image: "https://api.lorem.space/image?w=150&h=180"
    //     },
    //     {
    //         name: "Avatar",
    //         description: "Una película de amor y acción",
    //         image: "https://api.lorem.space/image?w=150&h=180"

    //     },
    //     {
    //         name: "Mamá",
    //         description: "Una película de terror y suspenso",
    //         image: "https://api.lorem.space/image?w=150&h=180"
    //     },
    // ];