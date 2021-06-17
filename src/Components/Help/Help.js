import React, {Component} from 'react';
import "./helpStyles.css";
// just a help page
class Help extends Component {
    render() {
        return (
            <div className="help-container">
                <div className="help-heading">
                    <h1>How to Play Hangman</h1>
                </div>
                <div className="help">
                    <ul>
                        <li>
                            There are 2 letter boxes: Picked Letters and Un-Picked Letters.
                        </li>
                        <li>
                            Click on the letters in the Un-picked letter box to make a guess on a letter the word contains.
                        </li>
                        <li>
                            As you click the letter they will disappear from the Un-Picked letter box<br/>
                            and will re-appear in the picked letter box and wont be able to select the same letter.
                        </li>
                        <li>
                            If the letter selected is a fitting letter all letters in the word that are of that letter<br/>
                            will be revealed.
                        </li>
                        <li>
                            If however the wrong letter is clicked the letter will still disappear from the Un-Picked<br/>
                            letter box and will reappear to the Picked letter box. For each wrong letter selected the<br/>
                            picture the hangman will progress to be Hanged.
                        </li>
                        <li>
                            If all letters are found then you will have won the game else you would have caused the<br/>
                            man to be hagged.
                        </li>
                        <li>
                            At any time the game can be reset by pressing the reset button or by refreshing the page.
                        </li>
                        <li>
                            HAPPY HANGING!!!
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Help;