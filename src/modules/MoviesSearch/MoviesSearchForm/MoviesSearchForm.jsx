import { useState} from "react";

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
        <form onSubmit={handleSubmit}>
            <input
                name="search"
                value={search}
                onChange={handleChange}
                type="text"
                placeholder="Search movies"
                required/>
            <button type="submit">Search</button>
        </form>
    )
}

export default MoviesSearchForm;