import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import SurveysQuestionsMap from "./SurveysQuestionsMap";

function FetchQuestions() {
  //fetching questions for a single survey

  const url = "https://surveyapp-backend.herokuapp.com/surveyslist/2";

  //Tilamuuttujat
  const [surveyQuestions, setQuestions] = useState({});
  const [err, setErr] = useState("Searching...");

  //function to fetch data from URL, implementing stuff later as well.
  const fetchAllQuestions = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setQuestions(json);
      setErr("");
    } catch (error) {
      setQuestions([]);
      setErr("Could not get the required data. Try again...");
    }
  };
  //useEffect: kun komponentti on latautunut -> Suoritetaan fetchAllQuestions()
  useEffect(() => {
    fetchAllQuestions();
  }, []);

  return (
    <div>
      <SurveysQuestionsMap questions={surveyQuestions} /> 
    </div>
  );
}

export default FetchQuestions;
