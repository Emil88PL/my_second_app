import PropTypes from 'prop-types'

function Name(props) {

    const {name} = props;

    return <h1>Hello, {name}</h1>
}


Name.defaultProps = {
    name: "Havana",
};

Name.propTypes = {
    name: PropTypes.string
}


export default Name