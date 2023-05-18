

// function ComponentWithProps(props) {
//     return (
//         <>       
//         <h1>{props.headerText}</h1>
//         <p>{props.numericProp}</p>
//         <p>{props.expressionProp}</p>
//         <p>{props.valueProp}</p>
//         <p>Showing nothing now: {props.someDataObject}</p>
//         <p>{props.arrayProp}</p>
//         <p>{props.functionProp}</p>
//         </>
//     );
// };

const ComponentWithProps = props => {

    const { headerText, numericProp, expressionProp,valueProp, someDataObject, arrayProp, functionProp} = props;

    return (
            <>       
            <h1>{headerText}</h1>
            <p>{numericProp}</p>
            <p>{expressionProp}</p>
            <p>{valueProp}</p>
            <p>Showing nothing now?!: {someDataObject} end</p>
            <p>{arrayProp}</p>
            <p>{functionProp}</p>
            </>
            );
}





export default ComponentWithProps