import React, {useState} from 'react';

const Counter = ()=>{
    const [count, setCount] = useState(0);
    return(
        <>
            <h1>{count}</h1>
            <button 
                type="button"
                onClick={setCount(count+1)}
            >
                Click to add one
            </button>
        </>
    );
};

export default Counter;