import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


function Understanding() {

    const dispatch = useDispatch();
    let [understanding, setUnderstanding] = useState('')

    const history = useHistory();

    const handleClick = () => {
        history.push('/supported');
    }

    const understandingFunction = (event) => {
        setUnderstanding(event.target.value)
    }

    const addUnderstanding = (event) => {
        event.preventDefault();
        console.log(understanding);
        dispatch({
            type: 'UNDERSTANDING',
            payload: understanding
        })
        handleClick();
    }

    return (
        <>
            <form onSubmit={(event) => addUnderstanding(event)}>
                <h2>How well are you understanding the content?</h2>
                <input type="number" min="0" max="10" width="50" onChange={understandingFunction} required></input>
                <button>NEXT</button>
            </form>
        </>
    )
}

export default Understanding;

// When the User enters a number and CLICKS the NEXT button, it should save information to the database.