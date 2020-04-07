import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';


function FetchQuestions() {

    const url = "http://localhost:8080";
    const [questions, setQuestions] = useState([]);
    const [err, setErr] = useState('Haetaan');

    const fetchAllQuestions = async () => {
        try {
            const response = await fetch(url + '/question/all');
            const json = await response.json();
            setQuestions(json);
            setErr('');
                } catch (error) {
            setQuestions([]);
            setErr('Tietojen haku ei onnistunut');
                }
            }
        //useEffect: kun komponentti on latautunut -> Suoritetaan fetchAllQuestions()
        useEffect(() => {
        fetchAllQuestions();
            }, []);
        console.log(questions);
        
        if (err.length > 0) {
        return ( <Typography> { err } </Typography>);
        }
        if (questions.length > 0) {
        return (
        <div>
            <p>JEEEEEE</p>
        </div>
        )
    }
}

export default FetchQuestions;