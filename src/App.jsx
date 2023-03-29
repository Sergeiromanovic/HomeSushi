import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Sets from './Components/Pages/Sets';
import SushiAndRolls from "./Components/Pages/SushiAndRolls";
import Rewiews from "./Components/Pages/Rewiews";
import AboutUs from "./Components/Pages/AboutUs";




function App() {
    return(
       <BrowserRouter>
       <Header/>
       <Switch>
       <Route path='/' exact>
            <Home/>
        </Route>
        <Route path='/Sets' >
            <Sets/>
        </Route>
        <Route path='/sushiAndRolls' >
            <SushiAndRolls/>
        </Route>
        <Route path='/rewiews'>
            <Rewiews/>
        </Route>
        <Route path='/AboutUs'>
            <AboutUs/>
        </Route>
       </Switch>
       </BrowserRouter> 

    )
};
export default App;
