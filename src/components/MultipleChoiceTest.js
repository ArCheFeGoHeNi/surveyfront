import React from 'react';
import { TextField, Typography, Paper, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

function MultipleChoiceTest(props) {
    const [value, setValue] = React.useState('female');
    console.log(props.monivalinnat);
    console.log(props.monivalinnat.multiAnswerOptions[0]);
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const multiOptions = props.monivalinnat.multiAnswerOptions;
   
    return (
    <div>
      <FormControl component="fieldset"  style={{margin: '20px'}}>
        <Typography>{props.monivalinnat.questionText}</Typography>
        <FormLabel component="legend"></FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={ value } onChange={ handleChange }>
        {multiOptions.map((option) => {
            return(
              <FormControlLabel value={option.multiAnswerOptionsId + " "} control={<Radio />} label={option.answerOption} />
            )
        }) }
        </RadioGroup>
      </FormControl>
      <div>
        <Button variant="contained">SUBMIT</Button>
      </div>
    </div>

    );
  }

  export default MultipleChoiceTest;