import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import QuestionsMap from './QuestionsMap';


function FetchQuestions() {

    const url = "https://surveyapp-backend.herokuapp.com/questions";
    //Tilamuuttujat
    const [questions, setQuestions] = useState([]);
    const [err, setErr] = useState('Haetaan');

    const fetchAllQuestions = async () => {
        try {
            const response = await fetch(url);
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
            <QuestionsMap questions = { questions } />
        </div>
        )
    }
}

export default FetchQuestions;