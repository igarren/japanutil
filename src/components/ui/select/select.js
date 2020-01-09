import React, { useEffect, useState, useRef } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import classes from './select.module.css';

const CustomSelect = (props) => {
    const inputLabel = useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    return (
        <FormControl variant="outlined" className={classes.FormControl} >
            <InputLabel id={props.id + '-label'} ref={inputLabel}>Activity</InputLabel>
            <Select
                className={classes.Select}
                labelId={props.id + '-label'}
                id={props.id}
                value={props.selected}
                onChange={props.changed}
                labelWidth={labelWidth}
            >
                <MenuItem value=''></MenuItem>
                {props.items.map((item) => {
                    return (
                        <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>)
}

export default CustomSelect;
