import React from 'react'
import {useState,useEffect}from 'react';

const Timer=()=>{

    const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
    const interval =setInterval(()=>{
        setSeconds((prevSeconds)=>prevSeconds+1);
    },1000)
    return ()=>{
        clearInterval(interval);
    };
    },[]);

    return (
        <div>
            <h2>Timer:{seconds}seconds</h2>
        </div>
    );
};

export default Timer;