import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { TextField } from "@material-ui/core";

function SurveyQuestionsMap2() {
  //Survey Object
  const [surveyObj, setObj] = React.useState({});
  //list of questions
  const [questions, setQuestions] = React.useState([]);
  const [virhe, setVirhe] = useState("");

  //answers for each question. empty objects by default
  const [answers, setAnswers] = useState([]);
  //const[answer1, setAnswer1] = useState('');

  const change = (e) => {
    // targets the answerText of a single answer object
  };

  React.useEffect(() => {
    fetch("https://surveyapp-backend.herokuapp.com/surveyslist/2")
      .then((response) => response.json())
      .then((json) => {
        setObj(json);
        setQuestions(json.questionList);
        createAnswerObjects(json.questionList);
      });
  }, []);

  // like the function says, it creates answer objects as many
  // as the parameter suggests, and saves it to the "answers" state
  const createAnswerObjects = (questionList) => {
    var AList = [];

    for (let index = 0; index < questionList.length; index++) {
      //answer contains question id and the answer text
      AList.push({
        questionID: questionList[index].questionID,
        answerText: "",
      });
    }
    setAnswers(AList);
  };

  const sendInformation = (e) => {
    setVirhe("Sending information...");
    console.log(answers);
    fetch("http://localhost:8080/answer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answerText: answers,
        question: {
          questionID: 5,
        },
        respondent: {
          respondentID: 2,
        },
      }),
    });
    setVirhe("Information SENT.");
  };

  return (
    <Paper style={{ textAlign: "center" }}>
      {console.log(answers)} {/*TEST*/}
      <div>
        <form>
          {questions.map((question, i) => {
            return (
              <div key={question.questionID} style={{ margin: "auto" }}>
                <p>{question.questionText}</p>
                <TextField
                  label="Input an answer..."
                  name="answerText"
                  value="{answers[i]}"
                  onChange={(e) => change(e)}
                  margin="normal"
                  required
                  autoFocus
                  fullWidth
                />
              </div>
            );
          })}
          <div style={{ margin: "10px" }}>
            <Button
              variant="contained"
              onClick={(e) => sendInformation()}
              color="primary"
              style={{ margin: "10px" }}
            >
              Post
            </Button>
          </div>
          <p>{virhe}</p>
        </form>
      </div>
    </Paper>
  );
}

export default SurveyQuestionsMap2;
