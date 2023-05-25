import React from "react";

const ComponentsWithArrayOfData = () => {

    const arrayOfListItems = [
        'Wash the dishes',
        'Walk the dog',
        'Clean the widnow',
        'Put shirt on'
    ];

    const listItems = arrayOfListItems.map(  // use unique ID generator - (like in NPM packages) UUID and Shortid 
        (item, index) => <li>{item}</li>
    );

    return (
        <ol>
            <li>
               {listItems}
            </li>
            
        </ol>
    );

};

export default ComponentsWithArrayOfData