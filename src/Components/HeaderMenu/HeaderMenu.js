import React, {Component} from 'react';
import "./headerMenuStyles.css";
// this class generates the header menu according to the path of the url
// if we are on the play page we want to show the help link in the header and vica-versa
class HeaderMenu extends Component {
    render() {
        let page = window.location.pathname;
        if (page === "/"){
            return (
                <div className="header-menu">
                    <a href="/help"><div>Help</div></a>
                </div>
            );
        }
        else{
            return (
                <div className="header-menu">
                    <a href="/"><div>Play</div></a>
                </div>
            );
        }
    }
}

export default HeaderMenu;