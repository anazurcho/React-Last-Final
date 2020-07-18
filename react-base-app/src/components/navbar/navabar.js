import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedOut, changeTheme } from "../../store/actions";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = ({ userLoggedOut, isAuthenticated, changeTheme }) => {

    const [DarkMode, DarkModeOn] = useState(()=>false);

    if (DarkMode) {
        changeTheme('minty');
    } else {
        changeTheme('journal');
    }

    const logoutHandler = () => {
        userLoggedOut();
    }

    const authUser = isAuthenticated ? null : (
        <React.Fragment>
            <li>
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
        </React.Fragment>
    );

    const authFeatures = isAuthenticated ?
        (
            <React.Fragment>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Main</Link>
                </li>
                <li className="nav-item">
                    <Link to="/breeds" className="nav-link">Breeds</Link>
                </li>
                <li>
                    <Link to="/categories" className="nav-link">Categories</Link>
                </li>
                <li>
                    <Link to="/images" className="nav-link">Images</Link>
                </li> 
                <li>
                    <Link to="/favorites" className="nav-link">Favorites</Link>
                </li>
                <li className="nav-item" onClick={logoutHandler}>
                    <Link to="/" className="nav-link">Logout</Link>
                </li>
            </React.Fragment>
        ) : null;


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand" href="#">FinalApp</Link>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    {authUser}
                    {authFeatures}
                    <DarkModeToggle
                        onChange={DarkModeOn}
                        checked={DarkMode}
                        size={80}
                    />
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
}

const mapDispatchToProps = {
    userLoggedOut, 
    changeTheme
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

