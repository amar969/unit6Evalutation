import React from 'react'
import {useParams} from "react-router-dom"
import styled from "styled-components";

const MovieWrapper = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    margin: 20px;
    gap: 20px;
`


export const MovieDetails = () => {

    const {movies, setMovies} = React.useState()

    const id = useParams()
    console.log(id)

    const getMovieDetails = async() => {
        let res = await fetch(`http://localhost:8080/movies/${id.id}`)
        let data = await res.json()
        console.log(data)
        setMovies(data)
    }

    React.useEffect(() => {
        getMovieDetails()
    }, [id])

    return(
        <>
        <MovieWrapper>
{/*                 
                <div style={{ border: "2px solid black", padding: "10px"}} >
                <img src={movies.poster_path} style={{ width: "200px", }} ></img>
                <h3>{movies.title}</h3>
               
                </div> */}
    
        </MovieWrapper>
        </>
    )
}