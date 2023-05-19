import { useState } from "react";


const ControllerWithControlledInput = () => {

    const [username, setUsername] = useState("User name");

    return (
        <>
            <form>
                <label>User name:</label>
                <input 
                    type="text"
                    name="username"
                    value={username}
                    // placeholder="User name"
                    onChange={event => setUsername(event.target.value)}
                />
            </form>
        </>
    );
};

export default ControllerWithControlledInput;
