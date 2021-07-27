import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';

const Sharelist =()=> {
    const updatedList = useSelector((state)=> state.SharesReducers.list)
    console.log(updatedList)
    return(
        
     <Col lg="6">
      <div className="list-item">
      <h4> Shares You Purchased</h4>
        {updatedList  && Object.keys(updatedList).map((item) => (
          <>
          <p>{updatedList[item] + " share of " + item } </p>
         
          </>
         ))}
        </div>
     </Col> 
    )

}

export default  Sharelist;