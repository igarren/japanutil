import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import classes from './checkbox.module.scss';

const CustomCheckbox = (props) => (
    <FormControlLabel 
        checked={props.checked} 
        className={classes.Checkbox}
        onChange={props.change} 
        control={<Checkbox className={classes.Control}  value={props.value}  />} 
        labelPlacement="end"
        label={props.label}/>
)
export default CustomCheckbox;