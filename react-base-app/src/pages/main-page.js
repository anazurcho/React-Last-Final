import React from "react";
import Login from "../components/login/login";
import { connect } from "react-redux";
import BreedsBeng from "../components/home-content/breeds_beng";

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