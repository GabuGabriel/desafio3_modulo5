import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav class="navbar d-flex justify-content-center bg-secondary">
            <Link to="/">
                <a class="navbar-brand" href="#" >Home</a>
            </Link>

            <Link to="Favoritos">
                <a class="navbar-brand" href="#">Favoritos</a>
            </Link>
        </nav>
    )
}