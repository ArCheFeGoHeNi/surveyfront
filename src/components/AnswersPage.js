import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function SurveysPage() {
  //saves a list of survey objects
  const [surveys, setSurveys] = React.useState([]);
  const url = "https://surveyapp-backend.herokuapp.com/surveyslist";

  //fetching survey data with "useEffect" from URL
  React.useEffect(() => {
    fetch(url) // fetches url as raw data
      .then((response) => response.json()) // changes the data format to JSON
      .then((data) => {
        // do what you want with the JSON data
        setSurveys(data); // sets the state as the JSON data (list of survey objects)
      });
  }, []);

  return (
    <div style={{ width: "50%", textAlign: "center", margin: "auto" }}>
      <Typography variant={"h3"}>Answers</Typography>
      <br />
      {surveys.map((survey) => {
        // Main .map.
        return (
          <div key={survey.surveyId}>
            <Paper style={{ padding: "10px" }} elevation={3}>
              <Typography variant={"h4"}>{survey.surveyName}</Typography>
              <Typography>{survey.surveyDesc}</Typography>
              <Typography>{survey.questionList.length} questions </Typography>

              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ margin: "auto" }}>
                    View all related answers
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography style={{ margin: "auto" }}>
                    {survey.questionList.map((question) => {
                      // This map is used to render questions
                      return (
                        <div key={question.questionID}>
                          <h4>{question.questionText}</h4>
                          <b><p>Answers:</p></b>
                          {question.answer.map((answer) => {
                            // This map is used to render all the answers to a specific question
                            return (
                              <div key={answer.answerID}>
                                <p>{answer.answerText}</p>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Paper>
            <br />
          </div>
        );
      })}
    </div>
  );
}
