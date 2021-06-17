import React, {Component} from 'react';
import "./headerStyles.css"
import HeaderMenu from "../HeaderMenu/HeaderMenu";
// just generates a header
class Header extends Component {
    render() {
        // here we also add a link to the help page in the Header menu
        return (
            <div className="header-wrapper">
                <h1>Hangman Game</h1>
                <div>
                    <HeaderMenu/>
                </div>
            </div>
        );
    }
}

export default Header;