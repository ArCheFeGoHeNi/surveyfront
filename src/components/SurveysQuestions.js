import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import { useParams } from "react-router";

function SurveyQuestions() {
  //Survey Object
  const [surveyObj, setObj] = React.useState({});
  //list of questions
  const [questions, setQuestions] = React.useState([]);
  //rename??
  const [message, setMessage] = useState("");
  //answers for each question. empty objects by default
  const [answers, setAnswers] = useState([]);

  //id sent from SurveysPage.js
  let id = useParams().id;

  //function that is executed each time an answer input changes
  const change = (e) => {
    //saves a value from the event (element's id)
    const questionID = parseInt(e.target.name);
    //a new Array, which will be used to replace the previous answers
    const newArr = [];

    //goes through the answer object array
    answers.forEach((answer) => {
      //if the answer object is the one we're supposed to edit...
      if (answer.questionID === questionID) {
        //creates a new answer object with the updated value from event
        const newObj = { questionID: questionID, answerText: e.target.value };

        //push it to the new array
        newArr.push(newObj);
      } else {
        //push unedited answer to the new array
        newArr.push(answer);
      }
    });
    //replaces old answers with the new ones
    setAnswers(newArr);
  };

  React.useEffect(() => {
    fetch(`https://surveyapp-backend.herokuapp.com/surveyslist/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setObj(json);
        setQuestions(json.questionList);
        createAnswerObjects(json.questionList);
      });
  }, []);

  //function to make sure that the app wont try to render undefined items
  //from an empty array.
  //renders ONLY IF answers has content in it
  const renderTextField = (i, questionID) => {
    const id = questionID + "";
    const listIndex = i + "";

    if (answers.length > 0) {
      return (
        <div>
          {console.log(answers)}
          <TextField
            label="Input an answer..."
            id={listIndex}
            name={id}
            onChange={change}
            margin="normal"
            required
            autoFocus
            fullWidth
            variant="outlined"
          />
        </div>
      );
    }
  };

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

  const sendData = (e) => {
    setMessage("Sending information...");
    answers.forEach((answer) => {
      fetch("https://surveyapp-backend.herokuapp.com/answer", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answerText: answer.answerText,
          question: {
            questionID: answer.questionID,
          },
          respondent: {
            respondentID: 2,
          },
        }),
      });
    });
    setMessage("Information SENT.");
  };

  /*const sendInformation = (e) => {
    setMessage("Sending information...");
    fetch("https://surveyapp-backend.herokuapp.com/answer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answerText: "lul",
        question: {
          questionID: 5,
        },
        respondent: {
          respondentID: 2,
        },
      }),
    });
  };*/

  return (
    <Paper style={{ textAlign: "center", width: "85%", margin: "auto" }}>
      <Typography
        variant="h4"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {surveyObj.surveyName}
      </Typography>
      <div>
        <form>
          {questions.map((question, i) => {
            return (
              <div
                key={question.questionID}
                style={{ padding: "7px", margin: "auto", width: "70%" }}
              >
                <div style={{ textAlign: "left" }}>
                  <h4 style={{ marginBottom: "0px" }}>
                    {question.questionText}
                  </h4>
                  {renderTextField(i, question.questionID)}
                  <br />
                </div>
              </div>
            );
          })}
          <div style={{ margin: "10px" }}>
            <Button
              variant="contained"
              onClick={(e) => sendData()}
              color="primary"
              style={{ margin: "10px" }}
            >
              Post
            </Button>
          </div>
          <p>{message}</p>
        </form>
      </div>
    </Paper>
  );
}

export default SurveyQuestions;
