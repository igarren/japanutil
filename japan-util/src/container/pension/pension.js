import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './pension.css';


const Pension = () => {
  const [category, setCategory] = React.useState('');
  
  const changeCategory = event => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };
  
  return (
    <Container maxWidth="sm"  className="Pension-container">
      <div>
        <form>
          <FormControl>
            <InputLabel id="label-select-category">Category</InputLabel>

            <Select
              labelId="label-select-category"
              id="select-category"
              value={category}
              onChange={changeCategory}
            >
              <MenuItem value={1}>Category I</MenuItem>
              <MenuItem value={2}>Category II</MenuItem>
              <MenuItem value={3}>Category III</MenuItem>
            </Select>
          </FormControl>    
          <FormControl>
            <TextField label="Years of Stay" id="input-years" />
          </FormControl>
        </form>
      </div>
    </Container>
  );
}


export default Pension;
