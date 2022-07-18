import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink, Outlet, useLocation } from "react-router-dom";
import MoviesItem from '../../components/MoviesItem';

import { getMovieById } from '../../shared/api/movies';
import s from './single-movie-page.module.css';

const SingleMoviePage = () => {
    
    const [state, setState] = useState({
        movie: {},
        loading: false,
        error: null,
    });

    const { movie, loading, error } = state;

    const { id } = useParams();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from ?? "/";
    const goBack = () => navigate(from);

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
                    loading: false,
                    error,
                
                }))
            }
        }
        if (id) {
      fetchMovies()
    }
        
    }, [id]);

    const getActiveLink = ({isActive}) => {
    return isActive ? s.itemActive : s.item;
}

    
    const isMovie = Object.keys(movie).length > 0;
    return (
        <main>
            <div className={s.container}>
                {loading && <p>...Loading</p>}
                {error && <p>Movie not found</p>}
                {isMovie && <button className={s.button} onClick={goBack}>Go back</button>}
                {movie?.id && <MoviesItem item={movie} />}
                {isMovie && <NavLink className={getActiveLink} to={`cast`}>Cast</NavLink>}
                {isMovie && <NavLink className={getActiveLink} to={`reviews`}>Reviews</NavLink>}
                <Outlet />
            </div>
        </main>
    );
}

export default SingleMoviePage;