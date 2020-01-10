import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import classes from './select.module.css';

const SelectCommon = (props) => (
    <FormControl>
        <InputLabel id={props.id + '-label'}>{props.label}</InputLabel>
        <Select          
            className={classes.Select}
            labelId={props.id + '-label'}
            id={props.id}
            value={props.value}
            onChange={props.handleChange}
            autoWidth="true"
            >
            {props.items.map((item) => {
                return (
                    <MenuItem value={item.value}>{item.text}</MenuItem>
                )
            })}
        </Select>
    </FormControl>
)

export default SelectCommon;
