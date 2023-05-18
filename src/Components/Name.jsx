function Name(props) {

    const {name} = props;

    return <h1>Hello, {name}</h1>
}


Name.defaultProps = {
    name: "Havana",
};


export default Name