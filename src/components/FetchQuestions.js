import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SurveysQuestionsMap from './SurveysQuestionsMap';


function FetchQuestions() {
    //fetching questions for a single survey

    const url = ("https://surveyapp-backend.herokuapp.com/surveyslist/2");

   //Tilamuuttujat
    const [surveyQuestions, setQuestions] = useState({});

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
        
    return (
        <div>
        
        <SurveysQuestionsMap questions = { surveyQuestions } />
        </div>
    );
    

}

export default FetchQuestions;