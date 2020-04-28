import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import ClearIcon from "@material-ui/icons/Clear";
import { TextField } from '@material-ui/core';

function SurveyQuestionsMap1() {
  //Survey Object
  const [surveyObj, setObj] = React.useState({});
  //list of questions
  const [questions, setQuestions] = React.useState([]);
  const[virhe, setVirhe] = useState("");

  const[answer, setAnswer] = useState(
    {answer: '', answer1: ''}
    );
  //const[answer1, setAnswer1] = useState('');

  const change = (e) => {
    setAnswer
    ( {
      ...answer, 
      [e.target.name] : e.target.value } );
}

  React.useEffect(() => {
    fetch("https://surveyapp-backend.herokuapp.com/surveyslist/2")
      .then((response) => response.json())
      .then((json) => {
        setObj(json);
        setQuestions(json.questionList);
      });
  }, []);

  const sendInformation = (e) => {
    setVirhe('Sending information...');
    console.log(answer);
    fetch('http://localhost:8080/answer', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
},
      body: JSON.stringify({
        "answerText": answer,
        "question": { 
        "questionID": 5
    },
        "respondent": {
        "respondentID": 2
    }
})
})
        setVirhe('Information SENT.');
}

  return (
    <Paper style={{textAlign: 'center'}}>
    <div>
      <form>
      {console.log(questions[0])}
      {questions.map((question) => {
        return (
          <div key={question.questionID} style={{margin: 'auto'}}>
            <p>{question.questionText}</p>
            <TextField label='Input an answer...' name='answer' value = {answer}
            onChange={ (e) => change(e) } margin='normal' required autofocus fullWidth />
          </div>
        );
      })}
      <div style={{margin: "10px"}}>
              <Button variant="contained" onClick={ (e) => sendInformation() } color="primary" style={{margin: "10px"}}>Post</Button>  
        </div>
        <p>{virhe}</p>
      </form>
    </div>
    </Paper>
  );
}

export default SurveyQuestionsMap1;