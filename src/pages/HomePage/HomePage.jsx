import MoviesList from '../../modules/MoviesList';
import s from './home-page.module.css';

const HomePage = () => {
    return (
        <main>
            <div className={s.container}>
                <h2>Trending today</h2>
                <MoviesList />
            </div>
        </main>
    )
}

export default HomePage;