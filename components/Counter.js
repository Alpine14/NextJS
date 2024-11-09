import React, { useState } from "react";

export default function Counter({increment}) {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((prevCount) => {
            const newCount = prevCount + increment;
            return newCount > 10 ? 0 : newCount;
        });
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}