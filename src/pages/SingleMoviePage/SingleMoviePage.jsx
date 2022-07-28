import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink, Outlet, Link, useLocation } from "react-router-dom";
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

    // const { id } = useParams();
    const { id: StrId } = useParams();
  const id = Number(StrId);
    // const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state?.from || "/";
    // const goBack = () => navigate(from);
     const goBack = location?.state?.from ?? '/';

    useEffect(() => {
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))

            try {
                const movieEl = await getMovieById(id);
                setState((prevState) => {
          return { ...prevState, loading: false, movie: { ...movieEl } };
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
        <>
            <div className={s.container}>
                {/* <button className={s.button} type="button" onClick={goBack}>Go back</button> */}
                <Link className={s.button} to={goBack}>
                    Go back
                </Link>
            
                {loading && <p>...Loading</p>}
                {error && <p>Movie not found</p>}
                {isMovie && <MoviesItem item={movie} />}
                {isMovie && <NavLink className={getActiveLink} to={`cast`} state={{ from: goBack }}>Cast</NavLink>}
                {isMovie && <NavLink className={getActiveLink} to={`reviews`} state={{ from: goBack }}>Reviews</NavLink>}
                
            </div>
            <Outlet />
        </>
    );
}

export default SingleMoviePage;
