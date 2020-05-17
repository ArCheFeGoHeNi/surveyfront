import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

function SurveyQuestions() {
  //Survey Object
  const [surveyObj, setObj] = useState({});
  //list of questions
  const [questions, setQuestions] = useState([]);
  const [message, setMessage] = useState("");
  //answers for each question. empty objects by default
  const [answers, setAnswers] = useState([]);
  const [multianswers, setMultianswers] = useState([]);
  //Multiple choice answer's value

  //id sent from SurveysPage.js
  let id = useParams().id;

  //Callback-function to get the value from MultipleChoice component
  const getMultiAnswer = (data) => {
    let alreadyAnswered = false; //this is to prevent duplicate answers from being saved
    const newList = []; //new empty array which will replace the list of multianswers

    //if the list is empty...
    if (multianswers.length < 1) {
      // if this didn't exist, iterating through the list would be impossible, because it's initially empty
      newList.push(data);

      // if it's not empty...
    } else {
      multianswers.forEach((answer) => {
        if (answer.questionID === parseInt(data.questionID)) {
          //if you have already selected an answer for the question, replace answer to that question
          // so basically this is in case you want to change your answers
          alreadyAnswered = true;
          newList.push(data);

          //if the currently iterated answer is not the one you're answering
          //just save it to the new list as is
        } else {
          newList.push(answer);
        }
      });

      //this code runs if you didn't changed your multiquestion answer
      if (!alreadyAnswered) {
        newList.push(data);
      }
    }
    setMultianswers(newList);
  };

  //this function adds the answers to multiple choice questions to the list of answers
  const addMultiAnswersToAnswersList = () => {
    multianswers.forEach((answer) => {
      if (answer.answerText.localeCompare("") === 0) {
      } else {
        answers.push(answer);
      }
    });
  };

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

  useEffect(() => {
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

    for (let i = 0; i < questionList.length; i++) {
      //answer contains question id and the answer text
      AList.push({
        questionID: questionList[i].questionID,
        answerText: "",
      });
    }
    setAnswers(AList);
  };

  const sendData = (e) => {
    addMultiAnswersToAnswersList();
    console.log(answers);

    setMessage("Sending information...");

    // console.log(answers);
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
    window.location.reload(true);
  };

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
            if (question.questionType === "multiplechoice") {
              const multiQuest = question;
              return (
                <MultipleChoiceQuestion
                  monivalinnat={multiQuest}
                  callback={getMultiAnswer}
                />
              );
            } else {
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
            }
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
