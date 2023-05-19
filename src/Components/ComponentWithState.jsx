import React, { useState} from 'react';

import CountUser from './CountUser';

const ComponentWithState = () => {

    const [count, setCount] = useState(5);

    return (
        <>
            <p>The current value of state is {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me to add 1 to count</button>
            <hr />
            <CountUser countProp={count} /> 
        </>
    );


};

export default ComponentWithState;