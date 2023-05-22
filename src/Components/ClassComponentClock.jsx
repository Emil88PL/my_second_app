import React from 'react';

class ClassComponentClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date().toLocaleTimeString(),
            updateCount : 0
        };
    };

    componentDidMount() {
        this.tictock = setInterval(() => {this.tick()}, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.tictock);
        console.log('Final update count: ${this.state.updateCount}');
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Not rquired in this case
    };

    tick() {
        this.setState({
            time : new Date().toLocaleTimeString(),
            updateCount : this.state.updateCount + 1
        });
    };

    render() {
        return (
            <div className="flex-clock" id="classClock">
                <h1>Clock made using a Class component</h1>
                <h2>The time is {this.state.time}</h2>
            </div>
        );
    };


};

export default ClassComponentClock;