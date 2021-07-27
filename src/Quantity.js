import React,{useState, useEffect} from 'react';
import {AddToList, AddLabel, AddNumber} from './Actions/index.js';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
const Quantity =({value, disable, text})=> {
const dispatch = useDispatch();

const updatedNum = useSelector((state)=> state.NumberReducers.num)

    return(
        <>
        <button disabled={disable} onClick={() =>  { return dispatch(AddToList(value, updatedNum)), dispatch(AddLabel(value))}} style={{color: text}}>Buy Shares</button>  
        <input type="number" className="quantity-btn"  width="200" onChange={(e)=> dispatch(AddNumber(e.target.value))} value={updatedNum} min="1" />
        </>
        )
  }

export default Quantity;