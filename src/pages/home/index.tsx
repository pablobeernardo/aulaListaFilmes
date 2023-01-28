import React, { useState, useEffect } from 'react';
import { Container, Movielist, Movie } from './styles';
import { API_URL, API_KEY, API_IMAGE } from '../../config/config';


export default function Home(){

    const [movies, setMovies] = useState<any[]>([])

    useEffect(() => {
        fetch(`${API_URL}/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    },[])



    return (
        <Container>
            <h1>Movies</h1>
            <Movielist>
                {
                    movies.map(movie => {
                        return (
                            <Movie>
                                <a href="#"><img src={`${API_IMAGE}${movie.poster_path}`} alt={movie.title}></img></a>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }           
            </Movielist>
        </Container>
    )
}