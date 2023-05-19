import React, { useState} from 'react';

import CountUser from './CountUser';

const ComponentWithState = () => {

    const [count, setCount] = useState(7.8);

    return (
        <>
            <p>The current value of state is {count}</p>
            <CountUser countProp={count} />
        </>
    );


};

export default ComponentWithState;