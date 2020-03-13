import React from 'react'
import './app.scss'

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps, state: AppState) {
        super(props, state);
    }

    componentDidMount() {
        chrome.runtime.sendMessage({ popupMounted: true });
    }

    render() {
        return (
            <div className="container">
                <h1 id="title">Browser Wallet</h1>
                <h2 className="methods">Transfer</h2>
                <button>Transfer</button>
                <h2 className="methods">Sign</h2>
                <button>Sign</button>
                <h2 className="methods">Generate</h2>
                <button>Generate</button>
                <h2 className="methods">Purchase</h2>
                <button>Purchase</button>
                <h2 className="methods">Issue Certificate</h2>
                <button>Issue</button>
                <h2 className="methods">Send Certificate</h2>
                <button>Send</button>
            </div>
        )
    }
}
