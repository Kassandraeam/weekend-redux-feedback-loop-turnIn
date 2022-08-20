import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Supported() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/comments');
    }

    const dispatch = useDispatch();
    let [supported, setSupported] = useState('')

    const supportedFunction = (event) => {
        setSupported(event.target.value)
    }

    const addSupported = (event) => {
        event.preventDefault();
        console.log(supported);
        dispatch({
            type: 'SUPPORTED',
            payload: supported
        })
        handleClick();
    }

    return (
        <>
            <form onSubmit={(event) => addSupported(event)}>
                <h2>How supported do you feel</h2>
                <input type="number" min="0" max="10" width="50" onChange={supportedFunction} required></input>
                <button>NEXT</button>
            </form>
        </>
    )
}

export default Supported;