import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Feeling() {

    const dispatch = useDispatch();
    const history = useHistory();
    let [feeling, setFeeling] = useState('')

    //This lets me move to the next page.
    const handleClick = () => {
        history.push('/understanding');
    }

    // this saves the info the user inputs to the array.
    const feelingFunction = (event) => {
        setFeeling(event.target.value)
    }

    // This console logs whatever the user inputs
    // This sends the the array to the store
    // This moves the user to the next page.
    const addFeeling = (event) => {
        event.preventDefault();
        console.log(feeling);
        dispatch({
            type: 'FEELING',
            payload: feeling
        })
        handleClick();
    }

    return (
        <>
            <form onSubmit={(event) => addFeeling(event)}>
                <h2>How are you feeling today?</h2>
                <input type="number" min="0" max="10" width="50" onChange={feelingFunction} required/>
                <button>NEXT</button>
            </form>
        </>
    )
}

export default Feeling;

// When the User enters a number and CLICKS the NEXT button, it should save information to the database.