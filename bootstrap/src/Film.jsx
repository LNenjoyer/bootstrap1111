import React,{useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
import img13 from './img/13.jpg';
import img14 from './img/14.jpg';
import img15 from './img/15.jpg';
import img16 from './img/16.jpg';
import img17 from './img/17.jpg';
import img18 from './img/18.jpg';
import img19 from './img/19.jpg';
import img20 from './img/20.jpg';

const Film = () => { 

    const [movies, setMovies] = useState([{id:1,ob:img1,tyt:"Czysty kod",au:"Robert C. Martin"},
        {id:2,ob:img2,tyt:"Python i AI dla e-commerce",au:"Sebastian Kondracki"},
        {id:3,ob:img3,tyt:"Finanse i Python Lagodne wprowadzenie do teorii fiansów",au:"Yves Hilpsch"},
        {id:4,ob:img4,tyt:"Git i GitHub",au:"Mariot Tsubasa"},
        {id:5,ob:img5,tyt:"Certyfikowany tester ISTQB",au:"Adam Roman Lucjan Stapp"},
        {id:6,ob:img6,tyt:"English 4 IT",au:"Beata Błaszczyk"},
        {id:7,ob:img7,tyt:"Budowanie mikrousług",au:"Sam Newman"},
        {id:8,ob:img8,tyt:"Wielka księga małych projektów w pythonie",au:"nieczytelne"},
        {id:9,ob:img9,tyt:"Ppython",au:"nieczytelne"},
        {id:10,ob:img10,tyt:"Pragmatyczny programista",au:"David Thomas Andrew Hunt"},
        {id:11,ob:img11,tyt:"Myślenie algorytmiczne",au:"nieczytelne"},
        {id:12,ob:img12,tyt:"Jak zaprogramować robota",au:"Danny Staple"},
        {id:13,ob:img13,tyt:"Python wprowadzenie",au:"nieczytelne"},
        {id:14,ob:img14,tyt:"Czysta architektura",au:"Robert C. Martin"},
        {id:15,ob:img15,tyt:"Analiza danych z wykorzystaniem SQL-a",au:"Cathy Tamimura"},
        {id:16,ob:img16,tyt:"Java zadania programowania",au:"nieczytelne"},
        {id:17,ob:img17,tyt:"Wzorce projektowe",au:"nieczytelne"},
        {id:18,ob:img18,tyt:"Język SQL",au:"Larry Rockoff"},
        {id:19,ob:img19,tyt:"Java zadania z programowania",au:"nieczytelne"},
        {id:20,ob:img20,tyt:"Java podstawy",au:"Cas S. Horsmann"},
    ]);

    return ( 
        <>
            
            {movies.map((movie) => ( 
                <div class="col-sm-6 col-md-4 border"  key={movie.id}>				
                    <a href='#'><img class="obr" src={movie.ob} alt={movie.tyt}/></a>
                    <p class="tytul">{movie.tyt}</p>
                    <p class="autor">{movie.au}</p>  
                </div>
                
            ))} 
        </>
    ); 
}; 

export default Film;