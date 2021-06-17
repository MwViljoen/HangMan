import React, {Component} from 'react';
import Letter from "../Letter/Letter";
import {alphabetArray} from "../../AlphabetArray";
import "./lettersStyles.css"
// this function determines if the user has found the word or not
function checkIfWon(selectedLetters, brokenUpWord){
    for(let i = 0; i < brokenUpWord.length; i++){
        if(!selectedLetters.includes(brokenUpWord[i])){
            return false;
        }
    }
    return true;
}

class Letters extends Component {
    constructor(props) {
        super(props);
        // binding event handlers
        this.handleClick = this.handleClick.bind(this);
    }
    // event handler used for state up and is used to pass event data from child to closest common parent
    // this is the first jump from child to parent by using state up
    // so we get event information from Letter > Letters > App and we use the information in App to change the
    // state array containing information
    handleClick(e){
        this.props.onLetterClick(e);
    }

    render() {
        /* if word was  found we tell the player they won*/
        if(checkIfWon(this.props.selectedLetters, this.props.brokenUpWord)){
            return (
                <div className="letters-container">
                    <h1>Verdict</h1>
                    <div className="letters-wrapper">
                        <h2>You saved the Pirate!</h2>
                    </div>
                </div>
            );
        }
        /*else if count exceeded tries they will be notified they lost*/
        else if(this.props.loss){
            return (
                <div className="letters-container">
                    <h1>Verdict</h1>
                    <div className="letters-wrapper">
                        <h2>You could not save the Pirate!</h2>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="letters-container">
                    <h1>Unpicked Letters</h1>
                    <div className="letters-wrapper">
                        {/*Here we render each letter in the alphabetArray one by one using map
                    * we also pass down the letter of the corresponding index
                    * we also pass down the prop of the event handler which is the state up link to parent
                    * finally we pass the last prop containing the letters that were selected by player
                    * this prop is passed down as a prop from the previous parent App.js*/}
                        {alphabetArray.map((letter, index) =>
                            <Letter key={index}
                                    letter={letter}
                                    onLetterClick={this.handleClick}
                                    selectedLetters={this.props.selectedLetters}
                            />
                        )}
                    </div>
                </div>
            );
        }
    }
}

export default Letters;