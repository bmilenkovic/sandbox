import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        // This is the only time we do direct assignment to this state
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message})
        );
    }

    render() {
        // return <div>Latitude: {this.state.lat}
        // <br/>
        // Error: {this.state.errorMessage}
        // </div>
        if (this.state.errorMessage && this.state.lat) {
            return <div>Error: {this.state.error}</div>;
        }

        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);