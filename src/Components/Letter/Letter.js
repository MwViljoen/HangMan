import React, {Component} from 'react';
import "./letterStyles.css"
// component for each letter and is used in multiple other components
class Letter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    /* this handler is the main source from which we get the child event information from
    * we use this information in the parent state array and in multiple other locations
    * from here we can almost do anything in this case we are passing the outer text which is the
    * letter to the parent using state up and passes through the parent of Letter.js which is
    * Letters.js and from there is passed to Main parent App.js*/
    handleClick(e) {
        this.props.onLetterClick(e.target.outerText);
    }
    // here we render based on props
    /*Firstly we use this component in 2 places currently "Letters" and "PickedLetterBox"
    * Letters pass down different props than that of PickedLetterBox
    * if picked state is true we know we can return the letter for the already PickedLettersBox.js
    * else if false we know the instance is made from a different component in this case Letters.js*/
    render() {
        const array = this.props.selectedLetters;
        const letter = this.props.letter;
        if(this.props.pickedState){
            return (
                <div className="letter-container">
                    <h5>{letter}</h5>
                </div>
            );
        }else{
            /*if the instance is made from Letter.js component we first check if the letter is already in the selected
            * array if so we do not render that letter again but return nothing instead. If however the letter is not
            * the array/state of parent we know the letter can still be rendered for the user too click on as a possinle
            * correct letter of the word*/
            if(array.includes(letter)){
                return null;
            } else{
                return (
                    <div className="letter-container" onClick={this.handleClick}>
                        <h5>{letter}</h5>
                    </div>
                );
            }
        }
    }
}

export default Letter;