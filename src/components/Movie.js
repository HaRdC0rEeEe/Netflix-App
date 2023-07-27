
import { useState, useEffect } from 'react';
import "./Movie.css"
import impData from "../data"
import DeleteButton from "./MovieDeleteButton"
import React from 'react';
import DeleteMoviesButton from './DeleteMoviesButton';
import ShowMoviesButton from './ShowMoviesButton';
import FilterButton from './FilterButton';
import categories from "../categories"
import questions from "../data_questions"
import Question from "../components/Question"




const Movie = () => {

    const [movieList, setMovieList] = useState(impData);
    const [typeOfMovie, setTypeOfMovie] = useState("");

    const deleteHandler = (deleteId) => {
        const filteredMovies = movieList.filter((movie) => {

            return movie.id !== deleteId;
        })
        setMovieList(filteredMovies);
    }


    const deleteEveryMovieFunction = () => {
        setMovieList([]);
    }

    const showEveryMovieFunction = () => {
        setMovieList(impData);
    }

    useEffect(() => {


        const filteredMovies = impData.filter((movie) => {
            return movie["category"] === typeOfMovie;
        });

        setMovieList(filteredMovies);
    }, [typeOfMovie]);

    const filterHandler = (movieTag) => {
        setTypeOfMovie(movieTag);
    };

    return (
        <div className="every-movie">
            {movieList.map((row) => {
                return (
                    <div key={row.id} className="one-movie">

                        <h2>{row.title}</h2>
                        <img src={row.image}></img>
                        <p>{row.age}</p>
                        <p>{row.tags}</p>
                        <p>{row.description}</p>
                        <DeleteButton delete={() => deleteHandler(row.id)} />

                    </div>)
            })
            }
            <DeleteMoviesButton deleteEveryMovie={deleteEveryMovieFunction} />
            <ShowMoviesButton showEveryMovie={showEveryMovieFunction} />

            {
                categories.map((oneCategory) => {
                    return <FilterButton filterMovies={() => filterHandler(oneCategory)} category={oneCategory} />
                })
            }


            {
                questions.map((element) => {
                    console.log(element);

                    return <Question key={element.id} title={element.title} info={element.info} />
                })
            }




        </div >
    );
}

export default Movie;
