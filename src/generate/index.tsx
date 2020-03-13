import React, { Component } from "react"

export default class Generate extends Component<{}> {
    render() {
        return (
            <div id="generate">
                <h3 className="methods">Generate</h3>
                <div className="action-button">
                    <button id="generate-button">Generate</button>
                </div>
            </div>
        )
    }
}
