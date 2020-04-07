import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function QuestionsMap(props) {

    
    return(
        <div>
        <Paper elevation={3} style={{margin: '20px'}}>
        <Typography variant={"h1"} style={{margin: '20px'}}>Kysymykset</Typography>
          <List style={{margin: '20px'}}>
            { props.questions.map (question => {
              return( 
                <ListItem key={question.id}>
                  { 'Kysely: ' + question.kysely  + ', Kysymysteksti: ' + question.kysymysteksti + ', Kysymykset tyyppi: ' + question.tyyppi }
                </ListItem> )
               }) 
            }
            </List>
        </Paper>
        </div>
    )
}

export default QuestionsMap;