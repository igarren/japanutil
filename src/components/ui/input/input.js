import React from 'react';
import TextField from '@material-ui/core/TextField';

const input  = (props) => (
      <TextField style={{width:'100%'}} 
            label={props.text} 
            variant="outlined"
            onChange={props.change}
            type={props.type} 
            min={0}/>
)
export default input;