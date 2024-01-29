import React from "react";
import Header from "../header/header";
import { BrowserRouter, Route } from "react-router-dom";

function Result () {
    return(
        <BrowserRouter>
        <div className="result-container">
        <Header/>
        <Route path="/">
            
        </Route>
        </div>
        </BrowserRouter>
    );
}
export default React;