import './Score.css';


const Score = (props) => {
    
    return(
        <div className = "scoreSection">
            <h className = "scoreHeader">Score : {props.score}</h>
        </div>
    );
}

export default Score;