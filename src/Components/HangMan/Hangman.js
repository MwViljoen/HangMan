import React, {Component} from 'react';
import "./hangManStyles.css"
// importing all images of hangman
import state1 from "../../images/state1.GIF";
import state2 from "../../images/state2.GIF";
import state3 from "../../images/state3.GIF";
import state4 from "../../images/state4.GIF";
import state5 from "../../images/state5.GIF";
import state6 from "../../images/state6.GIF";
import state7 from "../../images/state7.GIF";
import state8 from "../../images/state8.GIF";
import state9 from "../../images/state9.GIF";
import state10 from "../../images/state10.gif";
import state11 from "../../images/state11.GIF";

class Hangman extends Component {
    constructor(props) {
        super(props);
        this.handleEnd=this.handleEnd.bind(this);
    }
    // event handler to handle if the user has attempted to guess too many times
    handleEnd(){
        this.props.handleEnd();
    }

    render() {
        const count = this.props.count;
        // if loss prop is true we will simply generate the last hangman picture until player reset the game
        // as count increments the images will be rendered
        if(this.props.loss){
            return (
                <div className="image-container">
                    <img src={state11} alt="" onLoad={this.handleEnd}/>
                </div>
            )
        }
        else if(count === 0){
            return (
                <div className="image-container">
                    <img src={state1} alt=""/>
                </div>
            );
        }
        else if(count === 1){
            return (
                <div className="image-container">
                    <img src={state2} alt=""/>
                </div>
            );
        }
        else if(count === 2){
            return (
                <div className="image-container">
                    <img src={state3} alt=""/>
                </div>
            );
        }
        else if(count === 3){
            return (
                <div className="image-container">
                    <img src={state4} alt=""/>
                </div>
            );
        }
        else if(count === 4){
            return (
                <div className="image-container">
                    <img src={state5} alt=""/>
                </div>
            );
        }
        else if(count === 5){
            return (
                <div className="image-container">
                    <img src={state6} alt=""/>
                </div>
            );
        }
        else if(count === 6){
            return (
                <div className="image-container">
                    <img src={state7} alt=""/>
                </div>
            );
        }
        else if(count === 7){
            return (
                <div className="image-container">
                    <img src={state8} alt=""/>
                </div>
            );
        }
        else if(count === 8){
            return (
                <div className="image-container">
                    <img src={state9} alt=""/>
                </div>
            );
        }
        else if(count === 9){
            return (
                <div className="image-container">
                    <img src={state10} alt=""/>
                </div>
            );
        }
        // as soon as the count goes bigger than 10 we will trigger the event handler on load of this image
            // and set the loss state to true
        else if(count >= 10) {
            return (
                <div className="image-container">
                    <img src={state11} alt="" onLoad={this.handleEnd}/>
                </div>
            );
        }

    }
}

export default Hangman;