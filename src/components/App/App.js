import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import Scans from "../Scans/Scans";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <HashRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Scans}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}

export default App;