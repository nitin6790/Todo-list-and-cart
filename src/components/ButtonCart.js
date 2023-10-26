import { click } from '@testing-library/user-event/dist/click' 
import React from 'react' 
import { useState } from 'react' 
function ButtonCart() { 
     
    let  [count,setcount] = useState(0) 
 const handleClick=()=>{ 
  setcount('off') 
  if(count=count+1){ 
  setcount('on'); 
  count--; 
  } 
   console.log("Button Clicked",count) 
  } 
     
  return ( 
    <div> 
        <button onClick={()=>handleClick()}>{count}</button> 
    </div> 
  ) 
} 
 
export default ButtonCart