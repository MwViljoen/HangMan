import React, {Component} from 'react';
import "./hiddenWordStyles.css"
import FindWord from "../FindWord/FindWord";


class HiddenWord extends Component {
    render() {
        const selectedLetters = this.props.selectedLetters;
        // wordLetters is an array with the letters of the randomized word
        // we then pass down the letter of the map one by one using map and generating an instance of FindWord/letter
        const wordLetters = this.props.brokenUpWord;
        return (
            <div className="hidden-word-container">
                <h2>Hidden Word</h2>
                <div className="hidden-letters">
                    {wordLetters.map((letter, index) =>
                        <FindWord
                            key={index + 100}
                            letter={letter}
                            selectedLetters={selectedLetters}
                            loss={this.props.loss}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default HiddenWord;