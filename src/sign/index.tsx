import React, { Component } from "react"

export default class Send extends Component<{}> {
    render() {
        return (
            <div id="send">
                <h3 className="methods">Send</h3>
                <div className="action-button">
                    <button id="send-button">Send</button>
                </div>
            </div>
        )
    }
}
