import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 20;
    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increaseCount}>Click Me</button>
            <br />
            <p>Count: {count}</p>
            <h3>The Number:{number}</h3>
            <p>Count: {count}</p>
            <p><small>Double Count: {count * 2}</small></p>
        </div>
    );
};

export default Home;