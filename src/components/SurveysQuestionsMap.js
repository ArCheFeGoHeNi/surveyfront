import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import ClearIcon from "@material-ui/icons/Clear";

function SurveyQuestionsMap(props) {
  //Survey Object
  const [surveyObj, setObj] = React.useState({});
  //list of questions
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch("https://surveyapp-backend.herokuapp.com/surveyslist/3")
      .then((response) => response.json())
      .then((json) => {
        setObj(json);
        setQuestions(json.questionList);
      });
  }, []);

  return (
    <div>
      {console.log(questions[0])}
      {questions.map((question) => {
        return (
          <div key={question.questionID}>
            <p>{question.questionText}</p>
            <input type="text"></input>
          </div>
        );
      })}
    </div>
  );
}

export default SurveyQuestionsMap;
