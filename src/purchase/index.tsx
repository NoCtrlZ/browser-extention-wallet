import React, { Component } from "react"

export default class Purchase extends Component<{}> {
    render() {
        return (
            <div id="purchase">
                <h3 className="methods">Purchase</h3>
                <div className="action-button">
                    <button id="purchase-button">Purchase</button>
                </div>
            </div>
        )
    }
}
