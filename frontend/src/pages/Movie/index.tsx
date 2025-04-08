import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";
import './movie.css';
import { toast } from "react-toastify";

export default function Movie () {

    const { id } = useParams();
    const [ movie, setMovie ] = useState<any>();
    const [ loading, setLoading ] = useState<boolean>(true);
    const navigate = useNavigate();

    const saveMovie = () => {
        const myList = localStorage.getItem("@primeflix");
        let savedMovies = myList ? JSON.parse(myList) : [];
        const hasMovies = savedMovies.some((m: any) => m.id === movie.id);

        if (hasMovies) {
            toast.warn("This movie is already in your list!");
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@primeflix", JSON.stringify(savedMovies));
        toast.success("Movie saved successfully!");
    };

    useEffect(() => {
        const loadMovies = async () => {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "b7839e7012647739f8ded558537580a2",
                    language: "en-US"
                }
            })
                .then((response) => {
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Movie not found!");
                    navigate('/', { replace: true });
                    return;
                })
        };

        loadMovies();

        return () => {
            console.log("The component has been unmounted")
        };
    }, [navigate, id]);

    if (loading) {
        return (
            <div className="movie-info">
                <h1>
                    Loading movie details...
                </h1>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h1>
                { movie.title }
            </h1>
            <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title}
            />
            <h3>
                Synopsis
            </h3>
            <span>
                { movie.overview }
            </span>
            <strong>
                Reviews: { movie.vote_average } / 10
            </strong>
            <div className="buttons-area">
                <button onClick={saveMovie}>
                    Save
                </button>
                <button>
                    <a 
                        target="blank"
                        rel="external"
                        href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
                    >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
};