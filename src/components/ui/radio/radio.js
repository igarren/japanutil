import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '8.6px',
  },
}));

export default function CustomRadio() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} 
          label="Holder of a doctor’s degree (excluding professional degrees)" />
          <FormControlLabel value="male" control={<Radio />} 
          label="Holder of a master’s degree (including professional degrees)" />
          <FormControlLabel value="other" control={<Radio />} 
          label="Holder of a bachelor’s degree or
          acquisition of an education
          equivalent thereto (excluding
          holders of a doctor’s degree or
          master’s degree)" />
        </RadioGroup>
      </FormControl>
  );
}