import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardContent, CardHeader, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';

import MultipleChoiseTest from './MultipleChoiseTest';

function QuestionsMap(props) {

    
    return(
        <div>
        <Paper elevation={2} style={{margin: '20px'}}>
        <Typography variant={"h1"} style={{margin: '20px'}}>Kysymykset</Typography>
    

            { props.questions.map(card => {
              return(
              <Container>
                <Card key={card.questionID} style={{margin:'15px'}} elevation={3}>
                  <CardHeader title={card.questionText}>
                    
                            {console.log(card.questionText)}
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      Kysymyksen tyyppi: {card.questionType} <br />
                      
                    </Typography>
                      <TextField label='Vastaus' name='vastaus' required autoFocus></TextField>

                  </CardContent>
                  <CardActions>
                    {/* Tähän voi tulla kysymyskohtaisia buttoneja slidereja tai jotain... */}
                  </CardActions>
                </Card>
              </Container>
              );
            })
          }
          <Paper elevation={2} style={{margin: '20px'}}>
          <MultipleChoiseTest />
          </Paper>
          <div style={{margin: '10px', padding: '10px'}}>
            <Button variant="contained" color="primary"><CreateIcon />Lähetä</Button>
            <Button variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
          </div>
        </Paper>
        </div>
    )
  }
  
export default QuestionsMap;