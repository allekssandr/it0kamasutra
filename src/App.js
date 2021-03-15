import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Content from "./component/Content/Content";


function App(props) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state}/>
                <Content
                    state={props.state}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
    );
}

export default App;
