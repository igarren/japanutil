import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';

function NumberFormatCustom(props) {
      const { inputRef, onChange, ...other } = props;
      console.log('INUT', props)
      return (
        <NumberFormat
          {...other}
          getInputRef={inputRef}
          onValueChange={values => {
            onChange({
              target: {
                value: values.value,
              },
            });
          }}
          thousandSeparator={props.type === 'salary' ? true : false}
          isNumericString={props.type === 'salary' ? true : false}
          prefix={props.type === 'salary' ? "¥" : ''}
        />
      );
    }
const input = (props) => {
      return (
            <TextField style={{ width: '100%' }}
                  label={props.text}
                  variant="outlined"
                  onChange={props.change}
                  type={props.type}
                  InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                  />
      )
}
export default input;