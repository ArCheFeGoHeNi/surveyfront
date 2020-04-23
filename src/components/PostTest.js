import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';

function PostTest() {
    const[answer, setAnswer] = useState('');
    const[virhe, setVirhe] = useState("");

    const muuta = (e) => {
        setAnswer(e.target.value);
    }


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

    return(
        <Paper>
        <Typography variant={"h3"}>Post Test</Typography>

        <form>
        <TextField label='Input an answer...' name='answer' value = {answer}
            onChange={ (e) => muuta(e) } margin='normal' required autofocus fullWidth />
        
        <div style={{margin: "10px"}}>
              <Button variant="contained" onClick={ (e) => sendInformation() } color="primary" style={{margin: "10px"}}>Post</Button>  
        </div>
         <p>{virhe}</p>
        </form>

        </Paper>
    )
}

export default PostTest;