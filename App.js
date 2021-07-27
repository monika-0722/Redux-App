import React, {useState, useEffect} from 'react';
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import  Sharelist  from './Sharelist';
import  Shares  from './Shares';
import  Quantity from './Quantity';
import About from './About';
import Home from './Home';

const App =()=> {
return(
  <>
    <BrowserRouter>
    <Link to="/"></Link>
    <Link to="/my-shares" className="shares-btn"> My Shares</Link>
        <Switch>
          <Route path='/my-shares' component={Sharelist} />
          <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>
 
  </>
)
}
export default App;


