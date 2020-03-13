import React from "react";
import "./app.scss";

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, state: AppState) {
        super(props, state);
    }

    public componentDidMount() {
        // chrome.runtime.sendMessage({ popupMounted: true });
    }

    public render() {
        return (
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
                            <div id="nav-content"><h2>Select Function</h2></div>
                        </div>
                        </div>
                        <div id="account-info">
                            <h2>Your Address</h2>
                        </div>
                    </div>
                </div>
                <h3 className="methods">Transfer</h3>
                <button id="transfer">Transfer</button>
                <h3 className="methods">Sign</h3>
                <button id="sign">Sign</button>
                <h3 className="methods">Generate</h3>
                <button id="generate">Generate</button>
                <h3 className="methods">Purchase</h3>
                <button id="purchase">Purchase</button>
                <h3 className="methods">Issue Certificate</h3>
                <button id="issue">Issue</button>
                <h3 className="methods">Send Certificate</h3>
                <button id="send">Send</button>
            </div>
        );
    }
}
