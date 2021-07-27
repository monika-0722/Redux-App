import React,{useState, useEffect} from 'react';
import '../node_modules/react-linechart/dist/styles.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Shares =({btndisable})=> {
  const updatedlabel = useSelector((state)=> state.LableReducers.brandLabel)
  const updatedNum = useSelector((state)=> state.NumberReducers.num)
  const[account, setAccount] = useState(200);
  
    useEffect( ()=> {
          async function getdata() {
           axios .get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${updatedlabel}&apikey=ADTS8QH44RW2PB9D`)
           .then( result=> {
          
            const labels = Object.keys(result.data["Weekly Time Series"]);
            const priceData = labels.map( item => result.data['Weekly Time Series'][item]["1. open"])
            console.log(priceData[0]);
            const newshare = account -  (Number(updatedNum) * parseInt(priceData[0]));
            setAccount(newshare)

             if(newshare  < 0){
              setAccount("Insufficient Balance")
              alert("Cannot Add More Shares")  
              btndisable()
            }
          })
           .catch((error) => { 
             console.log(error)
           })  
          }
          getdata(updatedlabel)  
        },[updatedlabel]
        )
        
        return (
        <div className="blance-div">
       <span className="balance">Balance left - {account}</span>
        </div>
        )
        }

    export default Shares;

  