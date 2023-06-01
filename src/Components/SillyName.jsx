const generateName = require("sillyname");


const Sillyname = () => {
    
    let name = generateName();

    return(
        console.log("Today silly name is: ",name)
    );
};


export default Sillyname;

