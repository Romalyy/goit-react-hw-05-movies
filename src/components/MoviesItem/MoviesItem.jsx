import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
import s from "./movies-item.module.css";

const MoviesItem = ({ item }) => {
    const {
        poster_path,
        overview,
        title,
        vote_average,
        release_date,
        genres, } = item;
    
    const genresItem = genres.map(item => (
        <li key={nanoid()}>{item.name}</li>
    ));
    const releaseDate = release_date.slice(0,4)
    
    return (
        <div className={s.container}>
            <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={title}
                width="300"
                height="400"
            />
            <div >
                <h2>{`${title} (${releaseDate})`}</h2>
            <p>
              USER SCORE:
              <b>{vote_average * 10}%</b>
            </p>
            <p>
              OVERVIEW:
              <b>{overview}</b>
            </p>
            <p>GENRES:</p>
            <ul>
                {genresItem}
            </ul>
            </div>
        </div>
    )
}

MoviesItem.defaultProps = {
  item: [],
};

MoviesItem.propTypes = {
    item: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
        ),
  }),
};

export default MoviesItem;