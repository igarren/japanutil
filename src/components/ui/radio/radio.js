import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import classes from './radio.module.scss';
// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: '8.6px',
//   },
// }));

const CustomRadio = (props) => (
      <FormControl 
      className={classes.Radio}  
      component="fieldset" >
        <RadioGroup  value={props.value} onChange={props.change}>
          {props.data.map(item => (
            <FormControlLabel className={classes.Label}     key={item.value}  value={item.value} control={<Radio className={classes.Control}/>} 
            label={item.text} />
          ))}
        </RadioGroup>
      </FormControl>
  );

  export default CustomRadio;
