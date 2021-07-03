import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./css/styles.css";
import { useDispatch } from "react-redux";
import Input from './components/Input'

import {getProduct, getPlaintext1, getPlaintext2} from './redux/action/actProduct'

function App() {
  
    const dispatch = useDispatch()
    const placeHolder1 = "place 1"
    const placeHolder2 = "place 2"

    let arr = [
        { name: "a", age: 10 },
        { name: "b", age: 20 },
        { name: "c", age: 30 },
    ];

    const routesMap = routes.map((route, index) => {
        return (
            <Route path={route.path} component={route.component} exact={route.exact} key={index} />
        );
    });


    const saveDataToStore = () => {
        dispatch(getProduct(arr));
    }
    

    return (
        <Router>
            <div className="container">
                <div className="App container">bấm nút để lưu vào store</div>
                <button className="btn btn-dark" onClick={() => saveDataToStore()}> click </button>
                <Input placeHolder={placeHolder1} action={getPlaintext1}/>
                <Input placeHolder={placeHolder2}  action={getPlaintext2}/>
        
            </div>
            <Nav />
            <Switch>{routesMap}</Switch>
        </Router>
    );
}

export default App;
