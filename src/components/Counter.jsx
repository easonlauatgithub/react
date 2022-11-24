import React, { useEffect, useState } from 'react';
import styles from '../index.scss';

const Counter = ()=>{
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log(`Component rendered`);
        return ()=>{
            console.log(`Component removed`);
        };
    },[count]);

    useEffect(()=>{
        console.log(`state changed to ${count}`);
        return ()=>{
            console.log(`state changed from ${count}`);
        };
    },[count]);

    return (
        <>
            <h1 className={styles.main}>
                Hi {count}！
            </h1>
            <button type="button" 
                onClick={()=>{setCount(count+1);}}>
                click
            </button>
        </>
    );
};

export default Counter;