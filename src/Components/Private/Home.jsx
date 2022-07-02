import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom";

const MovieWrapper = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    margin: 20px;
    gap: 20px;
`

export const Home = () => {

    const [movie, setMovie] = React.useState([])

    const getMovie = async() => {
        let res = await fetch("http://localhost:8080/movies")
        let data = await res.json()

        console.log(data)
        setMovie(data)
    }

    React.useEffect( () => {
        getMovie()
    }, [] )

    return(
        <>
        <MovieWrapper>
        {movie.map((item) => {
            return(
                
                <div style={{ border: "2px solid black", padding: "10px"}} >
                <img src={item.poster_path} style={{ width: "200px", }} ></img>
                <h3>{item.title}</h3>
                <Link to={`/MovieDetails/${item.id}` }><button style={{ backgroundColor:"#FBA1A1", padding: "10px", border: "none"  }} > Get More Details </button></Link>

                </div>
                
            )
        })}
        </MovieWrapper>

        </>
    )
}