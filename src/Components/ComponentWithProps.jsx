

function ComponentWithProps(props) {
    return (
        <>       
        <h1>{props.headerText}</h1>
        <p>{props.numericProp}</p>
        <p>{props.expressionProp}</p>
        <p>{props.valueProp}</p>
        <p>Object not working ;/ will come back to that 'props.someDataObject'</p>
        <p>{props.arrayProp}</p>
        <p>{props.functionProp}</p>
        </>
    );
};

export default ComponentWithProps