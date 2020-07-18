import React from "react";
// import Register from "../components/register/register";
import Login from "../components/login/login";
import { connect } from "react-redux";
// import Posts from "../components/home-content/posts";
import BreedsBeng from "../components/home-content/breeds_beng";
// import Home from "../components/home";

const MainPage = ({ isAuthenticated }) => {

    const pageContent = isAuthenticated ? <BreedsBeng /> : <Login />;

    return (
        <div>
            {pageContent}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
}

export default connect(mapStateToProps)(MainPage);