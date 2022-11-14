import './Card.css';
import React, { useState } from "react";

var valClicked = 0;

const Card = (props) => {
    const [show, setShow] = useState(false);

    const showQuestion = () => {
        setShow(!show);
        
        var toHide = document.getElementsByClassName("gameBoard");
        var toShow = document.getElementsByClassName("questionScreen");

        toHide[0].style.visibility = "hidden";
        toShow[0].style.visibility = "visible";

        valClicked = props.val;
        console.log(valClicked);
    }

    return(
        <button className = "firstScreenCard" onClick = {showQuestion} disabled = {show}>{props.val}</button>
    );
}

export default Card;

export {valClicked};
