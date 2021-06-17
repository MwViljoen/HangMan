import React, {Component} from 'react';
import './App.css';
// including react bootstrap and bootstrap css after doing npm install react-bootstrap and bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "bootstrap/dist/css/bootstrap.min.css";
// importing components
import Letters from "./Components/LettersBox/Letters";
import Header from "./Components/Header/Header";
import HiddenWord from "./Components/HiddenWord/HiddenWord";
import Hangman from "./Components/HangMan/Hangman";
import PickedLettersBox from "./Components/PickedLettersBox/PickedLettersBox";
// function used to break up word into array of letters
function breakUpWord(word){
    let letterArray = [];
    for (let i = 0; i < word.length; i++){
        letterArray.push(word[i].toUpperCase());
    }
    return letterArray;
}

class App extends Component {
    // constructor with a state array keeping track of selected letters
    constructor(props) {
        super(props);
        this.state = {
            selectedLetters: [],
            count: 0,
            loss: false
        }
        // event handler bindings
        this.handleLetterClick = this.handleLetterClick.bind(this);
        this.handleLoss = this.handleLoss.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    //https://www.codegrepper.com/code-examples/javascript/react+push+to+state+array
    //
    handleLetterClick(e){
        const word = this.props.word;
        // if i dont do this IF it will populate the array's first index with undefined
        if(e){
            if(word.includes(e)){
                this.setState({
                    selectedLetters: [...this.state.selectedLetters, e]
                })
            }
            else{
                this.setState({
                    count: this.state.count + 1,
                    selectedLetters: [...this.state.selectedLetters, e]
                })
            }
        }
    }
    // state up from hangman.js and tells us the player attempted to many times
    handleLoss(){
        this.setState({
            loss: true
        })
    }
    // simply to reset the game
    handleReset(){
        window.location.reload(false);
    }

    render() {
        return (
            // using bootstrap grid and column for layout
            <div className="App">
                <Container className="grid-container" fluid>
                    <Row>
                        <Col>
                            {/*Hidden word reveals the word as the user selects the correct letters
                            * we pass down the randomized word from the index.js and
                            * the selectedLetters state array for use*/}
                            <HiddenWord
                                selectedLetters={this.state.selectedLetters}
                                loss={this.state.loss}
                                brokenUpWord={breakUpWord(this.props.word)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* Hangman progresses as the user attempts to find the word
                            * it has a counter that determines the amount of times the player attempted to guess a letter
                            * handleEnd is a prop event link from child to parent and as soon as the counter reaches maximum
                            * allowable letter guesses it will set the loss state that same state is then passed to
                            the child to prevent other actions from happening
                            **/}
                            <Hangman count={this.state.count} handleEnd={this.handleLoss} loss={this.state.loss}/>
                        </Col>
                        <Col>
                            <div>
                                {/* here we pass down only the selectedLetters prop from the parent
                                * this Component shows the letters that was already used by the player
                                * and is merely there for viewing and can not be interacted with*/}
                                <PickedLettersBox selectedLetters={this.state.selectedLetters}/>
                            </div>
                            <div>
                                <Letters
                                    onLetterClick = {this.handleLetterClick}
                                    selectedLetters = {this.state.selectedLetters}
                                    loss={this.state.loss}
                                    brokenUpWord={breakUpWord(this.props.word)}
                                /> {/*here we pass down the selected letters state array and link the event handler
                                    * by use of state up method, we then use this to access the event object data sent
                                    * by the child*/}
                            </div>
                            {/*just a button for reset did not make a component for it*/}
                            <div className="reset-button">
                                <button onClick={this.handleReset}>Reset</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
