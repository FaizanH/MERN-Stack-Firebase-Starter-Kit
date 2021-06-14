import React, { Component } from "react";

export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datalines: []
        };
    }
    componentDidMount() {
        // Get data from MongoDB
        /*
         * axios.get("http://localhost:5001/<project-name>/<region>/app/example")
            .then(res => {
                this.setState({
                    datalines: res.data
                });
            })
            .catch(err => console.log(err));
        */
    }
    
    datalinesList() {
        return this.state.datalines.map(currDataLine => {
            return currDataLine;
        }
    }
    
    render() {
        return (
            <div>This is an example Component</div>
            { this.datalinesList() }
        );
    }
}
