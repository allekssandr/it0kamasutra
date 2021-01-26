import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Content from "./Component/Content/Content";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Content/>
            </div>
        </BrowserRouter>
    );
}

export default App;
