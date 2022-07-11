import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "shared/api/movies";
import  CastPageItem  from './CastPageItem';
const CastPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })
    const { id } = useParams();
    
    useEffect(() => {
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));
            try {
                const data = await getMovieCredits(id);
                setState(prevState => ({
                    ...prevState,
                    items: data,
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
        if (id) {
      fetchMovies();
    }
    }, [id]);
      const { items, error, loading } = state;

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Movies not found</p>}
      { <CastPageItem items={items}/>}
    </div>
  );
}

export default CastPage;