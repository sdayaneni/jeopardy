import Card from './Card';
import './Category.css';


const Type = (props) => {
    
    return(
        <div className = "entries">
            <h className = "categoryHeader">{props.category}</h>
            <Card val = "100" category = {props.category}/>
            <Card val = "200" category = {props.category}/>
            <Card val = "300" category = {props.category}/>
            <Card val = "400" category = {props.category}/>
            <Card val = "500" category = {props.category}/>
        </div>
    );
}

export default Type;