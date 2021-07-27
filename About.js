import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';

const About =()=> {
    const updatedList = useSelector((state)=> state.SharesReducers.list)
    console.log(updatedList)
    return(
        
     <h1> Hello There</h1>
    )
}

export default About;