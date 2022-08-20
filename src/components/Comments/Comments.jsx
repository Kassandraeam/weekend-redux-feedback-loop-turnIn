import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Comments(){

    const dispatch = useDispatch();
    const history = useHistory();
    let [comments, setComments] = useState('')


    // handleClick to send to the next page
    const handleClick = () => {
        history.push('/review');
    }

    // change the state variable
    const commentsFunction = (event) => {
        setComments(event.target.value)
    }

    // add to store.
    const addComments = (event) => {
        event.preventDefault();
        console.log(comments);
        dispatch({
            type: 'COMMENTS',
            payload: comments
        })
        handleClick();
    }

    return(
        <>
            <form onSubmit={(event) => addComments(event)}>
                <h2>Any comments you want to leave?</h2>
                <input type="text" onChange={commentsFunction}></input>
                <button>Next</button>
            </form>
        </>
    )
};

export default Comments;
