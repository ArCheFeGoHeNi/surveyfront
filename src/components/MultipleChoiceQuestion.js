import React from 'react';
import {Typography,  Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

function MultipleChoiceQuestion(props) {
    const [answerValue, setAnswerValue] = React.useState({questionID: "", answerText: ""});
    //console.log(props.monivalinnat);
    //console.log(props.monivalinnat.multiAnswerOptions[0]);
    const handleChange = (event) => {
      const obj = {questionID: props.monivalinnat.questionID, answerText: event.target.value}
      setAnswerValue(obj);
      sendAnswerValue(obj)
      
    };

    
      const sendAnswerValue = (obj) => {
        props.callback(obj);
      }
      
    const multiOptions = props.monivalinnat.multiAnswerOptions;
   
    return (
    <div>
      <FormControl component="fieldset"  style={{margin: '20px'}}>
        <Typography>{props.monivalinnat.questionText}</Typography>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={ answerValue.answerText } onChange={ handleChange }>
        {multiOptions.map((option) => {
            return(
              <FormControlLabel value={option.answerOption + " "} control={<Radio />} label={option.answerOption} />
            )
        })}
        </RadioGroup>
      </FormControl>
      <div>
        <Button variant="contained" onClick={(e) => sendAnswerValue()}>TESTISUBMIT</Button>
      </div>
    </div>

    );
  }

  export default MultipleChoiceQuestion;