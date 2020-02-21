import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const CustomSelect = (props) => {
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <FormControl variant="outlined" style={{ width: '100%' }} >
            <InputLabel ref={inputLabel}  >{props.text}</InputLabel>
            <Select
                value={props.value}
                labelWidth={labelWidth}
                onChange={props.change} >
                {props.data.map(item => (
                    <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
export default CustomSelect;