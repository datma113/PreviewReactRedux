import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./css/styles.css";
import { useDispatch } from "react-redux";
import Input from "./components/Input";

import { getProduct, saveValueOfInputToStore } from "./redux/action/actProduct";

function App() {
    const dispatch = useDispatch();

    const placeHolderAndKeyOfInputComponents = [
        { key: "name", placeHolder: "input your name" },
        { key: "age", placeHolder: "input your age" },
        { key: "dob", placeHolder: "input your day of birth" },

    ];
    const placeHolderAndKeyOfInputComponentsMap = placeHolderAndKeyOfInputComponents.map(
        (element, index) => {
            return <Input
            placeHolder={element.placeHolder}
            keyOfValue={element.key}

            action={saveValueOfInputToStore}
            key={index}
        />
        }
    );

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
    };

    return (
        <Router>
            <div className="container">
                <div className="App container">bấm nút để lưu vào store</div>
                <button className="btn btn-dark" onClick={() => saveDataToStore()}>
                    {" "}
                    click{" "}
                </button>

                <div>
                    {placeHolderAndKeyOfInputComponentsMap}
                </div>
                
            </div>
            <Nav />
            <Switch>{routesMap}</Switch>
        </Router>
    );
}

export default App;
