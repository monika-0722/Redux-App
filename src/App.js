import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import  Sharelist  from './Sharelist';
import  Shares  from './Shares';
import  Quantity from './Quantity';

const App =()=> {
const[input, setInput] = useState('');
const[output, setOutput] = useState([]);
const[disable, setDisable] = useState(false);
const[text, setText] = useState("#fff");
const[newdata, setNewdata] = useState([]);

  function printInput(value){
        setInput(value); 
      }

      useEffect( () => {
        async function getData(){
          if(input.length > 2){
          const res = await Axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${input}&apikey=6ZHH1SV65RNOBNP0`)
          setOutput(res.data.bestMatches)
          }
          else{
            setOutput([])
          }
        }
        getData()
      }, [input])

      function btndisable(){
        setDisable(true)
        console.log(disable)
        setText("#000")
      }

return(

  <div className = "App">
   <Shares btndisable={btndisable} /> 
    <Container>
    <Row>
      <Col lg="12">
        <div className="input-section">
          <input type="text" placeholder="Search" onChange={e=>printInput(e.target.value)} name="result" value={input}  />
        </div>
        { output && output.map(item =>(
        <p><button onClick={e=>setNewdata([item["1. symbol"]])} >{item["1. symbol"]} </button> &nbsp;
          <Quantity value={item["1. symbol"]}  disable={disable}  text={text} />
        </p>
        ))}

      </Col> 
      <Col lg="4">
        <Sharelist />  
      </Col>
    </Row>
  </Container>
  </div>
)

}
export default App;


