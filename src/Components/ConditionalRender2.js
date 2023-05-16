import React from 'react';

const ConditionalRender2 = () => {

    const renderMe = true;
    

  return (
    <>
        {
            renderMe ?
                <p>I will be displayed if renderMe is True</p>
                :
                <p>I will be displayed if renderMe is False</p>

        }
    </>
  )


};

export default ConditionalRender2