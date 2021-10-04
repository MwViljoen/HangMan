import React, {Component, Fragment} from 'react';
import "./headerMenuStyles.css";
import {Link} from "react-router-dom";
// this class generates the header menu according to the path of the url
// if we are on the play page we want to show the help link in the header and vica-versa
class HeaderMenu extends Component {
    render() {
        return (
            <div className="header-menu">
                <Link to="/HangMan/help">
                    <div className="header-menu-tile">Help |</div>
                </Link>
                <Link to="/HangMan">
                    <div className="header-menu-tile">| Play</div>
                </Link>
            </div>
        );
    }
}

export default HeaderMenu;