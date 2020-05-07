import React from 'react'; // TO-DO, own table for this?
import { makestyle } from '@material-ui/core/styles'; 
import { Radio, RadioGroup, Form, FormControl, FormControlLabel,
FormHelperText, FormLabel, Button } from '@material-ui/core/Radio'; 

const useStyles = makeStyles((theme ) => ({
    formStyle: {
        
    }

}))

export default function MultChoice () { 

    const classes 
    const [value, setValue] = useState(''); 
    const [error, setError] = useState(false); 
    const [surtext, setSurText] = React.useState('Valitse äkkii'); 

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
      };

      const handleSubmit = (event) => { 
          event.preventDefault(); 

      }; 

      return ( 
          <form onSubmit={handleSubmit}> 
            <FormControl component="fieldset" error={error} className={classes.tyyli}> 
                <FormLabel component="legend"> Insert kysely tähän boi </FormLabel>
                <RadioGroup aria-label="survey" name="survey" value={value} onChange={handleRadioChange}> 
{/*vastaukset tähän */} <FormControlLabel value="kyllä" control={<Radio />} label="Kyllä vain" /> 
                        <FormControlLabel value="ei" control={<Radio/>} label="en oo alkoholisti" /> 
                </RadioGroup>
                <FormHelperText>{surText}</FormHelperText>
                <Button type="submit" variant="outlined" color="secondary" className={classes.nappula}>
                    Lukitse vastaukset 
                </Button>
            </FormControl>
          </form>
      )

}