import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: '8.6px',
//   },
// }));

const CustomRadio = (props) => (
      <FormControl 
      style={{margin: '8.6px'}} 
      component="fieldset" >
        <RadioGroup  value={props.value} onChange={props.change}>
          {props.data.map(item => (
            <FormControlLabel value={item.value} control={<Radio />} 
            label={item.text} />
          ))}
        </RadioGroup>
      </FormControl>
  );

  export default CustomRadio;
