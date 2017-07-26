import React from "react";
import DataTables from "datatables.net-bs"
import ReactDOM from "react-dom";
import axios from 'axios';

const format = {}

class Scans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scans: []};
    }

    componentDidMount() {
        axios.get('/api/scans')
            .then(response => this.setState({scans: response.data}))
            .catch(error => console.error(error));
    }

    render() {
        return <DataTables />
    }
}

export default Scans;