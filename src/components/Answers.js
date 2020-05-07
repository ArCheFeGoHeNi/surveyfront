import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

export default function Answers() {
    const [surveyObj, setObj] = useState({});
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetch('https://surveyapp-backend.herokuapp.com/surveyslist')
        .then((response) => response.json())
        .then((data) => {
            setObj(data)
        });
    }, []);

    const createAnswerObjects = () => {

        var answerList = [];

        for (let n = 0; n < surveyObj.length; n++) {
            for (let i = 0; i < surveyObj[n].questionList.length; i++) {
                answerList.push({
                    questionText: surveyObj[n].questionList[i].questionText
                })

                for (let j = 0; j < surveyObj[n].questionList[i].answer.length; j++) {
                    answerList.push({
                        answer: surveyObj[n].questionList[i].answer[j].answerText
                    })
                }
            }
        }
        setAnswers(answerList);
        console.log(answers);
    }

    return (
        <div>
            <Button onClick={createAnswerObjects} >Näytä vastaukset</Button>
            <Paper style={{ textAlign: "center", width: "85%", margin: "auto" }} >
                <Typography
                    variant="h4"
                    style={{ marginTop: "20px", marginBottom: "20px "}}
                >
                    {surveyObj.surveyName}
                </Typography>
                <div>
                    <form>
                        {answers.map((answer) => {
                            return (
                                <div
                                    key={answer.answerID}
                                    style={{ padding: "7px", margin: "auto", width: "70%" }}
                                >
                                    <div style={{ textAlign: "left" }}>
                                        <h4 style={{ marginBottom: "0px" }}>
                                            {answer.questionText}
                                        </h4>
                                        <p>{answer.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </form>
                </div>
            </Paper>
        </div>
    )
}