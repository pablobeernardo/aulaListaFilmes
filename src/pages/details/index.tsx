import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { API_URL, API_KEY, API_IMAGE } from "../../config/config";
import { useParams, Link } from "react-router-dom";
import Cast from "../../components/cast";

export default function Details(){

    const [selectedMovie, setSelectedMovie] = useState<any>({})   
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}/${id}?api_key=${API_KEY}&language=pt-BR`)
        .then(response => response.json())
        .then(data => setSelectedMovie(data))
    },[id])

    return (
        <Container>
            <div>
                <img src={`${API_IMAGE}${selectedMovie.backdrop_path}`} alt="Texto qualquer" className="backdrop" />
                <div className="movie">
                    <img src={`${API_IMAGE}${selectedMovie.poster_path}`} alt="texto qualquer" className="movie-poster"/>
                    <div className="details">
                        <h1>{selectedMovie.title}</h1>
                        <span>Sinopse: {selectedMovie.overview}</span>
                        <span className="release-date">Data de Liberação: {selectedMovie.release_date}</span>
                        <Link to="/"><button>Voltar</button></Link>
                    </div>
                </div>
            </div>
            <Cast></Cast>
        </Container>
    )
}