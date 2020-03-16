import React from "react"
import { HashRouter as Router, Link } from "react-router-dom"

const Methods = () =>
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

export default Methods
