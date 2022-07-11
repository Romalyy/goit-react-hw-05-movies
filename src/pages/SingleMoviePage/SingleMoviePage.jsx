import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import MoviesItem from '../../components/MoviesItem';

import { getMovieById } from '../../shared/api/movies';

const SingleMoviePage = () => {
    
    const [state, setState] = useState({
        movie: {},
        loading: false,
        error: null,
    });

    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))

            try {
                const movie = await getMovieById(id);
                setState((prevState) => {
          return { ...prevState, loading: false, movie: { ...movie } };
        });
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    movie: {...movie},
                    loading: false,
                    error,
                
                }))
            }
        }
        if (id) {
      fetchMovies()
    }
        
    }, [id]);


    const goBack = () => navigate(-1);
    const { movie, loading, error } = state;
    const isMovie = Object.keys(movie).length > 0;
    return (
        <main>
            <div>
                {loading && <p>...Loading</p>}
                {error && <p>Movie not found</p>}
                {isMovie && <button onClick={goBack}>Go back</button>}
                {movie?.id && <MoviesItem item={movie} />}
                {isMovie && <NavLink to={`cast`}>Cast</NavLink>}
                {isMovie && <NavLink to={`reviews`}>Reviews</NavLink>}
                <Outlet />
            </div>
        </main>
    );
}

export default SingleMoviePage;