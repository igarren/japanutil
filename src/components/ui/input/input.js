import React from 'react';
import TextField from '@material-ui/core/TextField';

const input  = (props) => (
      <TextField style={{minWidth: '250px'}} id="standard-basic" label={props.text} variant="outlined" />
)
export default input;