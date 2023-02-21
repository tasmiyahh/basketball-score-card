import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count , setCount] = useState(0)
const [countguest , setcountguest] = useState(0)
  
  
  function btn1() {
    setCount(count+1)
    document.querySelector(".score").innerHTML = count

  }

  function btn2() {
    setCount(count+2)
    document.querySelector(".score").innerHTML = count

  }
  function btn3() {
    setCount(count+3)
    document.querySelector(".score").innerHTML = count

  }

  function btn01() {
   setcountguest(countguest +1)
    document.querySelector(".guestScore").innerHTML =countguest

  }
  function btn02() {
    setcountguest(countguest +2)
    document.querySelector(".guestScore").innerHTML =countguest

  }
  function btn03() {
    setcountguest(countguest +3)
    document.querySelector(".guestScore").innerHTML =countguest

  }
  return (
    <div className="App">
      <h2>BASKET-BALL SCORE BOARD</h2>
      <div className="app-container">
        
        <div className='app-countainer-div'>
         
         <h3>Home</h3>
          <p className='score'>{count}</p>
       
          <div>
            <button id='btn1' onClick={() => {
              btn1()
            }}>+1</button>
            <button id='btn2' onClick={() => {
              btn2()
            }}>+2</button>
            <button id='btn3' onClick={() => {
              btn3()
            }}>+3</button>
          </div>
        </div>
        <div>
          <h3>Guest</h3>
          <div className='guestScore'>{countguest}</div>
          <div>
            <button id='btn01' onClick={() => {
              btn01()
            }}>+1</button>
            <button id='btn02' onClick={() => {
              btn02()
            }}>+2</button>
            <button id='btn03' onClick={() => {
              btn03()
            }}>+3</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
