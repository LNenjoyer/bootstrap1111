import React,{useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './img/1.jpg';
const Film = () => { 

    const [movies, setMovies] = useState[{id:1,ob:img1,tyt:"Czysty kod",au:"Robert C. Martin"}]

    return ( 
        <>
            {movies.map((movie) => ( 
                <div class="col-sm-6 col-md-4 border" key={movie.id}>				
                    <a href='#'><img class="obr" src={movie.ob} alt={movie.tyt}/></a>
                    <p class="tytul">{movie.tyt}</p>
                    <p class="autor">{movie.au}</p>  
          </div>
                
            ))} 
        </>
    ); 
}; 

export default Film;