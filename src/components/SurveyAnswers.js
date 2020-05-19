import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { useParams } from "react-router";

export default function SurveyAnswers() {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const [msg, setMsg] = useState("Loading jalludata...");

  React.useEffect(() => {
    fetch(`https://surveyapp-backend.herokuapp.com/surveyslist/2`)
      .then((response) => response.json())
      .then((json) => {
        setAnswers(json.questionList);
        setQuestions(json.questionList.answer);
      });
  }, []);

  console.log(questions);

  return (
    <div>
      <Card>
        {answers.map((adata) => (
          <p key={adata.questionId}>
            {adata.questionText}
            {adata.answer.answerID}
            {adata.answerText}

            {console.log(adata)}
          </p>
        ))}
      </Card>
    </div>
  );
}
