import React, {Component} from 'react';
import "./pickedLettersBoxStyles.css"
import Letter from "../Letter/Letter";

class PickedLettersBox extends Component {
    render() {
        const pickedLettersArray = this.props.selectedLetters
        return (
            <div className="pickedletter-container">
                <h1>Picked Letters</h1>
                <div className="pickedletter-wrapper">
                    {/* Here we generate all the picked letters that the player has already selected as a possible
                    * correct letter we use the component that we already created again but pass down different props
                    * among these props are a boolean value that is used to identify from where the instance is called
                    * we also pass down a key but added 50 since the keys of the unselected box of letters are 26 letters
                    * and key starts by 0 and ends with 25 so we continue with keys from 50 upwards which can only
                    * be a maximum of 26 + 50 so the next .map method we will start from keys 100 and upwards for
                    children identification*/}
                    {pickedLettersArray.map((letter, index) =>
                        <Letter key={(index + 50)}
                                letter={letter}
                                pickedState={true}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default PickedLettersBox;