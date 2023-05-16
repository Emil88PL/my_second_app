import React from 'react';

const ConditionalRender3 = () => {

    const renderMe = true;
    const dontRenderMe = false;
    

  return (
    <>
        {
            renderMe ?
                <p>I will be displayed if renderMe is True (Nested Ternary)</p>
                :
                !dontRenderMe ?
                    <p>I will be displayed if dontRenderMe is True</p>
                    :
                    <p>Will be displayed if render me is false and dontRenderMe is true</p>

        }
    </>
  )


};

export default ConditionalRender3