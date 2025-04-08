import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './favorites.css'

export default function Favorites() {

    const [ movies, setMovies ] = useState<any>([]);

    const deleteMovie = (id: string) => {
        let moviesFilter = movies.filter((item: any) => {
            return( item.id !== id);
        });

        setMovies(moviesFilter);
        localStorage.setItem("@primeflix", JSON.stringify(moviesFilter));
    }

    useEffect(() => {
        const myList = localStorage.getItem("@primeflix");
        setMovies(myList ? JSON.parse(myList) : []);
    }, []);

    return (
        <div className="my-movies">
            <h1>
                My Movies
            </h1>

            { movies.length === 0 && <span>You have any movie saved.</span> }

            <ul>
                {
                    movies.map((item: any) => {
                        return (
                            <li key={item.id}>
                                <span>
                                    { item.title }
                                </span>
                                <div>
                                    <Link to={`/movie/${item.id}`}>
                                        See Details
                                    </Link>
                                    <button onClick={() => deleteMovie(item.id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}