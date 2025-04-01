import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {

    return (
        <header>
            <Link 
                className='logo' 
                to="/"
            >
                Prime Flix
            </Link>
            <Link
                className='favorites'
                to="/favorites"
            >
                My Movies
            </Link>
        </header>
    )
}