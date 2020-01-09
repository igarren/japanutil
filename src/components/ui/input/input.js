import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';

import classes from './input.module.css';

const input = (props) => {
    let inputControl = '';

    switch (props.type) {
        case 'salary':
            inputControl = (
                <>
                <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
                <NumberFormat
                    customInput={OutlinedInput}
                    id={props.id} 
                    labelWidth={103}
                    startAdornment={<InputAdornment position="start">&#165;</InputAdornment>}
                    thousandSeparator={true}
                    value={props.value}
                    onChange={props.changed}
                />
                </>);
            break;
        default:
            inputControl = (
            <TextField 
                id={props.id} 
                label={props.label} 
                value={props.value}
                onChange={props.changed}
                variant="outlined" />);
            break;

    }
    return (
        
        <FormControl variant="outlined" className={classes.Input} >
            {inputControl}
        </FormControl>

    )
}


export default input;
