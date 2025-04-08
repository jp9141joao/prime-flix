import { useEffect, useState } from "react"
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css'

export default function Home () {

    const [ movies, setMovies ] = useState<any>([]);
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        const loadMovies = async () => {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "b7839e7012647739f8ded558537580a2",
                    language: "en-US",
                    page: 1,
                }
            });

            setMovies(response.data.results.slice(0, 10));
            setLoading(false);
        }

        loadMovies();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h2>
                    Loading movies...
                </h2>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="movies-list">
                {
                    movies.map((movie: any) => {
                        return (
                            <article key={movie.id}>
                                <strong>
                                    { movie.title }
                                </strong>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                                    alt={movie.title}
                                />
                                <Link to={`/movie/${movie.id}`}>
                                    Access
                                </Link>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
};