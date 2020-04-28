import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function SurveysPage() {
  //saves a list of survey objects
  const [surveys, setSurveys] = React.useState([]);
  const url = "https://surveyapp-backend.herokuapp.com/surveyslist";

  //fetching survey data with "useEffect" from URL
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSurveys(data);
      });
  }, []);


  return (
    <div style={{ width: "50%", textAlign: "center", margin: "auto" }}>
      {surveys.map((survey) => {
        return (
          <div key={survey.surveyId}>
            <Paper style={{ padding: "10px" }} elevation={3}>
              <Typography variant={"h4"}>{survey.surveyName}</Typography>
              <Typography>{survey.surveyDesc}</Typography>
              <Typography>{survey.questionList.length} questions</Typography>
              <Button
                style={{ margin: "5px" }}
                variant="contained"
                color="primary"
                component={Link}
                to="/survey"
              >
                Take Survey
              </Button>
            </Paper>
            <br />
          </div>
        );
      })}
    </div>
  );
}
