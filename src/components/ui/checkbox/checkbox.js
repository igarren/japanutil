import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = (props) => (
    <FormControlLabel 
        style={{margin:'4px -2px'}} 
        checked={props.checked} 
        onChange={props.change} 
        control={<Checkbox value={props.value}  />} 
        label={props.label}/>
)
export default CustomCheckbox;