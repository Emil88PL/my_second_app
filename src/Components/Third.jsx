import React from 'react';

const Third = () => {
    const date = new Date().toLocaleDateString();

    return(
    <div>   
        <p>This component was created on: {date}</p>
    </div>
    );
}

export default Third;
