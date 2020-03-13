import React from "react"
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import "./app.scss"
import Methods from "./methods"
import Generate from "./generate"
import Issue from "./issue"
import Purchase from "./purchase"
import Send from "./send"
import Sign from "./sign"
import Transfer from "./transfer"

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, state: AppState) {
        super(props, state);
    }

    public componentDidMount() {
        chrome.runtime.sendMessage({ popupMounted: true });
    }

    public render() {
        return (
            <Router>
                <div className="container">
                    <div id="title">
                        <h1>Browser Wallet</h1>
                    </div>
                    <div id="header">
                        <div id="header-contents">
                            <Methods/>
                            <div id="account-info">
                                <h2>Your Address</h2>
                            </div>
                        </div>
                    </div>
                    <div id="body">
                        <Switch>
                            <Route exact path="/" component={Transfer} />
                            <Route exact path="/sign" component={Sign} />
                            <Route exact path="/generate" component={Generate} />
                            <Route exact path="/purchase" component={Purchase} />
                            <Route exact path="/issue" component={Issue} />
                            <Route exact path="/send" component={Send} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
