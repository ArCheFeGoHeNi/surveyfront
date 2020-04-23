import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';


function SurveyQuestionsMap(props) {

    
    return(
        <div>
        <Paper elevation={2} style={{margin: '20px'}}>
        <Typography variant={"h1"} style={{margin: '20px'}}>Kyselyt</Typography>
    

            { props.questions.map(card => {
              console.log("hello" + props.questions)
              return(
              <Container>
                <Card key={card.surveyId} style={{margin:'15px'}} elevation={3}>
                  <CardHeader title={card.surveyName}>
                    
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      Kyselyn kuvaus: {card.surveyDesc} <br />
                      
                    </Typography>
                      <Button variant="contained">Valitse kysely</Button>
                    
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
          
          </Paper>
          <div style={{margin: '10px', padding: '10px'}}>
            <Button variant="contained" color="primary"><CreateIcon />Lähetä</Button>
            <Button variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
          </div>
        </Paper>
        </div>
    )
  }
  
export default SurveyQuestionsMap;