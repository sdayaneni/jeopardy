import './App.css';
import Score from './components/Score'
import Category from './components/Category';
import {valClicked} from './components/Card';
import React, { useState } from "react";


function App() {
  const [score1, setScore1] = useState(0);

  const handleAnswer = () => {

    var answer = document.getElementsByClassName("answerField")[0].value;

    if(answer == "Sid") {
      setScore1(score1 + parseInt(valClicked));
    }

    var toShow = document.getElementsByClassName("gameBoard");
    var toHide = document.getElementsByClassName("questionScreen");

    toHide[0].style.visibility = "hidden";
    toShow[0].style.visibility = "visible";

    document.getElementsByClassName("answerField")[0].value = "";
  
  }


  return (
    <div className="App">

        <div className = "gameBoard">
          <Category category = "SPORTS"/>
          <Category category = "MOVIES"/>
          <Category category = "FOOD"/>
          <Category category = "HISTORY"/>
          <Category category = "SCIENCE"/>
        </div>

        <div className = "allScores">
          <Score score = {score1}/>
        </div>

        <div className = "questionScreen">
            <p className="question">What is Your Name?</p>

            <div className = "answerSection">
              <input placeholder='Answer Here!' className = "answerField"></input>
              <button className='answerButton' onClick = {handleAnswer}>Enter</button>
            </div>
        </div>
    </div>


  );
}

export default App;
