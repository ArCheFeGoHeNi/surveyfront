import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';

function PostTest() {
    const[answer, setAnswer] = useState("");
    const[virhe, setVirhe] = useState("");

    const muuta = (e) => {
        setAnswer({
            ...answer,
            [e.target.name]: e.target.value
        });
    }

    return(
        <Paper>
        <Typography variant={"h3"}>Post Testi</Typography>

        <form>
        <TextField label='answer' name='answer' value={ answer }
            onChange={ (e) => muuta(e) } margin='normal' required fullWidth={true} />
        
        <div style={{margin: "10px"}}>
              <Button variant="contained" color="primary" style={{margin: "10px"}}>Laske</Button>  
        </div>
        </form>

        </Paper>
    )
}

export default PostTest;