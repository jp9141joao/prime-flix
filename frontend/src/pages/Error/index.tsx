import { Link } from "react-router-dom";
import './error.css';

export default function Error() {
    return (
        <div className="not-found">
            <h1>
                Error 404
            </h1>
            <h2>
                Page not found!
            </h2>
            <Link to={"/"}>
                See all of the movies by clicking here!
            </Link>
        </div>
    )
}