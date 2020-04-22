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


function SurveysMap(props) {

    
    return(
        <div>
        <Paper elevation={2} style={{margin: '20px'}}>
        <Typography variant={"h1"} style={{margin: '20px'}}>Kyselyt</Typography>
    

            { props.survey.map(surveycard => {
              return(
              <Container>
                <Card key={surveycard.surveyId} style={{margin:'15px'}} elevation={3}>
                  <CardHeader title={surveycard.surveyName}>
                    
                  </CardHeader>
                  <CardContent>
                    <Typography>
                      Kyselyn kuvaus: {surveycard.surveyDesc} <br />
                      
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
          
          </Paper>
          <div style={{margin: '10px', padding: '10px'}}>
            <Button variant="contained" color="primary"><CreateIcon />Lähetä</Button>
            <Button variant="contained" color="secondary"><ClearIcon />Tyhjennä</Button>
          </div>
        </Paper>
        </div>
    )
  }
  
export default SurveysMap;