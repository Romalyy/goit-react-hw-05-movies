import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import  {getTrendingMovies} from '../../shared/api/movies'
import s from './movies-list.module.css';

const MoviesList = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));
            try {
                const data = await getTrendingMovies();
                setState(prevState => ({
                    ...prevState,
                    items: [...data],
                    loading: false,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        }
        fetchMovies()
    }, []);

    const { items, loading, error } = state;
    const elements = items.map(({ id, title }) => title !== undefined && <li className={s.item} key={id}>
        <Link className={s.link} to={`/movies/${id}`}>{ title }</Link>
    </li> )

    return (
        <div className={s.container}>
            {loading && <p>...Loading</p>}
            {error && <p>Movies not found</p>}
            <ul className={s.list}>{elements}</ul>
        </div>
    )
}

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;