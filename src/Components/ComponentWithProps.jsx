

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


import PropTypes from 'prop-types';


const ComponentWithProps = props => {

    const { headerText, numericProp, expressionProp,valueProp, objectProp, arrayProp, functionProp, someString} = props;

    const nextNumberDisplay = arrayProp.map(seqNum => 
            <p key={seqNum}>Numbver is : {seqNum}; Next is {seqNum += 1}</p>
        );
        // to show object Key / Values 
    const objectPropsDisplay  = [];

    for (let [key, value] of Object.entries(objectProp)) {
        objectPropsDisplay.push(<p key={key}>The value of {key} in the bojectProp is {value}</p>)
    }

    return (
            <>       
            <p>{someString}</p>
            <h1>{headerText}</h1>
            <p>Numeric prop: {numericProp}</p>
            <p>Expression prop: {expressionProp}</p>
            <p>Value prop: {valueProp}</p>
            {/* <p>Need to loop through Key / Values in someDataObject: {objectPropsDisplay}.</p> */}
            <p>Array prop: {arrayProp}</p>
            <p>Function props: {functionProp()}</p>
            {nextNumberDisplay}
            {objectPropsDisplay}
            </>
            );
}

ComponentWithProps.defaultProps = {
    someString: "Another Default String (Ater name)",
};

ComponentWithProps.propTypes = {
    headerText: PropTypes.string,
    someString: PropTypes.string,
    numericProp: PropTypes.number,
    expressionProp: PropTypes.func,
    valueProp: PropTypes.func,
    arrayProp: PropTypes.array,
    objectProp: PropTypes.shape({
        key1: PropTypes.string,
        key2: PropTypes.number,
        key3: PropTypes.array,
    }),
    // could aslo have used PropTypes.exact here to ensure 
    // that only these keys were present
    unsuppliedProp: PropTypes.any
};











export default ComponentWithProps