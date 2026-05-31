import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>Dashboard</Link>
            <Link to='/workouts'>Workouts</Link>
            <Link to='/exercises'>Exercises</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/profile'>Profile</Link>
        </nav>
    )
}