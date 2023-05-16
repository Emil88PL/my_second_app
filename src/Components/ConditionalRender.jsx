import React from 'react';

const ConditionalRender = () => {

    const renderMe = true;
    const dontRenderMe = false;

    if (renderMe) {
        return (
            <p>Will  be displayed if renderMe is true</p>
        );
    } else if (!dontRenderMe) {
        return (
            <p>Will be displayed if dontRenderMe is false (and renderMe is false)</p>
        );   
    } else {
        return (
            <p>I will be displayed if renderMe is false and dontRenderMe is true</p>
        );
    }

};

export default ConditionalRender