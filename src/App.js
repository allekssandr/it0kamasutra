import React from 'react';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Content from "./component/Content/Content";
import HeaderContainer from "./component/Header/HeaderContainer";


function App(props) {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar />
                <Content />
            </div>
    );
}

export default App;
