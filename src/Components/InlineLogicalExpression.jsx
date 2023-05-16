import React from 'react';

const InlineLogicalExpression = () => {

    const renderMe = true;
    const dontRenderMe = false;
    

  return (
    <>
        {(renderMe) && <p>It will be display if renderMe is true (I'm in line)</p>}
        {(!renderMe && !dontRenderMe) && <p>I will be diplayed if dontRenderMe is false</p>}
        {(!renderMe && dontRenderMe) && <p>I will be displayed if render me is false and dontRenderMe is true</p>}
    </>
  )


};

export default InlineLogicalExpression