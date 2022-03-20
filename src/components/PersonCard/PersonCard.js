import React, {Component} from "react";
import './PersonCard.css';

class PersonCard extends Component {
    render() {
    const {person: {firstName, lastName, age, hairColor}} = this.props;
        return(
            <div className="PersonCard">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}
export default PersonCard;