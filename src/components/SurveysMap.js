import React from 'react';
import { Typography, Paper, Container, Button, TextField, Grid, List, ListItem } from '@material-ui/core';
import { Card, CardContent, CardHeader, CardActions } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ClearIcon from '@material-ui/icons/Clear';


function SurveysMap(props) {

    
    return(
        <div>
        <Paper elevation={2} style={{margin: '20px'}}>
        <Typography variant={"h1"} style={{margin: '20px', textAlign: 'center'}}>Valitse Kysely</Typography>
    

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
                      <Button variant="outlined" color="primary" style={{margin:"10px"}}>Valitse</Button>
                    
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