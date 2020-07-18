import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './style/index.css';
import Service from "./service/Service";
import ServiceContext from "./components/service-context/service-context";
import { Provider } from "react-redux";
import store from "./store/store";


const service = new Service();

const app = (
    <Provider store={store}>
        <ServiceContext.Provider value={service}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ServiceContext.Provider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));