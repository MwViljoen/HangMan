import React, {Component} from 'react';
import "./findWordStyles.css";
/*this function is used to return whether the selected letters match the word letters*/
function checkLetters (letter, selectedLetters){
    if (selectedLetters.includes(letter)){
        return true;
    }
    else {
        return false;
    }
}

class FindWord extends Component {
    render() {
        const letter = this.props.letter;
        const selectedLetters = this.props.selectedLetters;
        /*If the loss prop is true we will reveal the word but in red also indicating a loss*/
        if(this.props.loss){
            return (
                <div className="letter-wrapper1">
                    <h2>{this.props.letter}</h2>
                </div>
            );
        }
        /*if the letter matches a letter in the selectedLetter array we know the user has found one correct letter
        * and is then rendered with the letter or revealed else if not the render will just render with a blank*/
        else if(checkLetters(letter, selectedLetters)){
            return (
                <div className="letter-wrapper">
                    <h2>{this.props.letter}</h2>
                </div>
            );
        }
        // simply hiding the unknown letters
        else{
            return (
                <div className="letter-wrapper">
                    <h6><b>*</b></h6>
                </div>
            );
        }
    }
}

export default FindWord;