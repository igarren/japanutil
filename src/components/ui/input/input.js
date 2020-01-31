import React from 'react';
import TextField from '@material-ui/core/TextField';

const input  = (props) => (
      <TextField style={{width:'100%'}} id="standard-basic" label={props.text} variant="outlined" />
)
export default input;