import React from 'react';
import { TextField, Typography, Paper, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

function MultipleChoiceQuestion(props) {
    const [answerValue, setAnswerValue] = React.useState('');
    //console.log(props.monivalinnat);
    //console.log(props.monivalinnat.multiAnswerOptions[0]);
    const handleChange = (event) => {
      setAnswerValue(event.target.value);
    };

    
      const sendAnswerValue = () => {
        props.callback(answerValue);
        console.log(answerValue);
      }
    
  /*  const sendData = (e) => {
      console.log(answerValue);  
      fetch("https://surveyapp-backend.herokuapp.com/answer", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answerText: answerValue,
            question: {
              questionID: props.monivalinnat.answer.questionID,
            },
            respondent: {
              respondentID: 2,
            },
          }),
        });
      }; */
      
    const multiOptions = props.monivalinnat.multiAnswerOptions;
   
    return (
    <div>
      <FormControl component="fieldset"  style={{margin: '20px'}}>
        <Typography>{props.monivalinnat.questionText}</Typography>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={ answerValue } onChange={ handleChange }>
        {multiOptions.map((option) => {
            return(
              <FormControlLabel value={option.answerOption + " "} control={<Radio />} label={option.answerOption} />
            )
        }) }
        </RadioGroup>
      </FormControl>
      <div>
        <Button variant="contained" onClick={(e) => sendAnswerValue()}>TESTISUBMIT</Button>
      </div>
    </div>

    );
  }

  export default MultipleChoiceQuestion;