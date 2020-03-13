import React, { Component } from "react"

export default class Issue extends Component<{}> {
    render() {
        return (
            <div id="issue">
                <h3 className="methods">Issue</h3>
                <div className="action-button">
                    <button id="issue-button">Issue</button>
                </div>
            </div>
        )
    }
}
