import { useState } from "react";


const ControllerWithControlledInput = () => {

    const [username, setUsername] = useState("User name");

    const handleSubmit = event =>{
        event.preventDefault();
        const dataToSend = JSON.stringify({ username })
        console.log(dataToSend);

    };

    return (
        <>
            <form onSubmit={event => handleSubmit(event)}>
                <label>User name:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    // placeholder="User name"
                    onChange={event => setUsername(event.target.value)}
                />
                <br />
                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default ControllerWithControlledInput;
