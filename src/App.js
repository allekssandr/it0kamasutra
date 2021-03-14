import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Content from "./component/Content/Content";
import {BrowserRouter} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state}/>
                <Content state={props.state} addPost={props.addPost}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
