import React from 'react'
import { useState } from 'react';

function ButtonApp() {
    const [count, setCount] = useState(0);

    const clickHandle1 = () => {
      setCount(count + 1);
      console.log("Button clicked", count);
    };
  
    const clickHandle2 = () => {
      if (count > 0) {
        setCount(count - 1);
        console.log("Button clicked", count);
      }
    };
  
    const clickHandle3 = () => {
      setCount(0);
      console.log("Button clicked", count);
    };
  
  return (
    <div>{count}
    <br></br>
    <button onClick={() => clickHandle1()}>Add to the cart</button>
    <br></br>
    <button onClick={() => clickHandle2()}>Remove from the cart</button>
    <br></br>
    <button onClick={() => clickHandle3()}>Empty the cart</button></div>
  )
}

export default ButtonApp