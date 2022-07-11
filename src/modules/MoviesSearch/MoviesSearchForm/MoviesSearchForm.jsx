import { useState } from "react";
import s from './movies-search-form.module.css';

const MoviesSearchForm = ({onSubmit}) => {
    const [ state, setState ] = useState({
        search: "",
    })

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        setState({search: ""})
    }

    const { search } = state;

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input
                className={s.input}
                name="search"
                value={search}
                onChange={handleChange}
                type="text"
                placeholder="Search movies"
                required/>
            <button className={s.button} type="submit">Search</button>
        </form>
    )
}

export default MoviesSearchForm;