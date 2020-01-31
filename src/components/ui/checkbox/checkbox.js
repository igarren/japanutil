import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = (props) => (
    <FormControlLabel style={{margin:'-2px'}} control={<Checkbox value="checkedC" />} label={props.label}/>
)
export default CustomCheckbox;