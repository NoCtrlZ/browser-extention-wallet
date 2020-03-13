import React from "react"
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import "./app.scss";
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
                            <div className="dropdown">
                            <div id="nav-drawer">
                                <input id="nav-input" type="checkbox" className="nav-unshown"/>
                                <label id="nav-open" htmlFor="nav-input"><span/></label>
                                <label className="nav-unshown" id="nav-close" htmlFor="nav-input"/>
                                <div id="nav-content">
                                    <div className="sidebar-title">
                                        <h2>Select Function</h2>
                                    </div>
                                    <div className="function-list">
                                        <ul>
                                            <li className="function-name"><Link to="/">Transfer</Link></li>
                                            <li className="function-name"><Link to="/sign">Sign</Link></li>
                                            <li className="function-name"><Link to="/generate">Generate</Link></li>
                                            <li className="function-name"><Link to="/purchase">Purchase</Link></li>
                                            <li className="function-name"><Link to="/issue">Issue</Link></li>
                                            <li className="function-name"><Link to="/send">Send</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
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
