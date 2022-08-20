import axios from "axios";
import { useSelector } from "react-redux";

function Review() {

    const Feeling = useSelector((store) => store.Feeling);
    const Supported = useSelector((store) => store.Supported);
    const Understanding = useSelector((store) => store.Understanding);
    const Comments = useSelector((store) => store.Comments);

    // console.log('Here are my values: ', Feeling, Supported, Understanding, Comments);

    // onclick, post the information to the database.

    const sendToDatabase = () => {
        console.log('Sending to database');
        axios({
            method: "POST",
            url: '/',
            data: {
                feeling: Feeling,
                understanding: Understanding,
                support: Supported,
                comments: Comments
            }
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log('HELP ME 500', err)
        })
    };

    return (
        <>
            <h1>REVIEW YOUR FEEDBACK</h1>
            <p>Feeling: {Feeling}</p>
            <p>Supported: {Supported}</p>
            <p>Understanding: {Understanding}</p>
            <p>Comments: {Comments}</p>
            <button onClick={sendToDatabase}>SUBMIT</button>
        </>
    )
}

export default Review;


// When the submit button is clicked, save the submission in the database. The user should see a submission success page. They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.

// When the submit button is hit, POST that information to the database.