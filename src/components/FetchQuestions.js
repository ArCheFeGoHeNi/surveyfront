import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SurveysMap from './SurveysMap';


function FetchQuestions() {

    const[id, setId] = useState();

    const url = ("https://surveyapp-backend.herokuapp.com/surveyslist/" + id);
    
    //Tilamuuttujat
    const [survey, setSurvey] = useState([]);
    const [err, setErr] = useState('Haetaan');

    const fetchAllQuestions = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setSurvey(json);
            setErr('');
                } catch (error) {
            setSurvey([]);
            setErr('Tietojen haku ei onnistunut');
                }
            }
        //useEffect: kun komponentti on latautunut -> Suoritetaan fetchAllQuestions()
        useEffect(() => {
        fetchAllQuestions();
            }, []);
        console.log(survey);
        
        if (err.length > 0) {
        return ( <Typography> { err } </Typography>);
        }
        if (survey.length > 0) {
        return (
        <div>
            <SurveysMap survey = { survey } />
        </div>
        )
    }
}

export default FetchQuestions;