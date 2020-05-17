import React, { useEffect, useState } from "react";
import SurveysQuestionsMap from "./SurveysQuestionsMap";

//unused component?
function FetchQuestions() {
  //fetching questions for a single survey

  const url = "https://surveyapp-backend.herokuapp.com/surveyslist/2";

  //Tilamuuttujat
  const [surveyQuestions, setQuestions] = useState({});

  //function to fetch data from URL, implementing stuff later as well.
  const fetchAllQuestions = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setQuestions(json);
    } catch (error) {
      setQuestions([]);
      alert("could not fetch questions");
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
