import React, { useState,useCallback, useRef, useEffect} from 'react';
import 'date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '../../components/ui/input/input';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import SelectCommon from '../../components/ui/select/SelectCommon';
import DateFnsUtils from '@date-io/date-fns';
import { Alert } from '@material-ui/lab';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './pension.css';


  
const Pension = () => {  
  
  const isMounted = useRef(true)
  
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState('');
  const [isCalculating, setIsCalculating] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [length, setLength] = useState('');
  const [lastContribution, setLastContribution] = useState('');
  const [items, setItems] = useState('');
  
  
  const ResultBody = (props) => {
    if(isCalculating) {
      return (<div>Loading...</div>);
    } else {
      if(error) {      
        return  (<Alert severity="error"  elevation={6} variant="filled" >{errorMessage}</Alert>);
      } else {
        return  (<div>No Data</div>);              
      }
    }
  };
                 
  const changeCategory = event => {
    setCategory(event.target.value);
  };
  const changeType = event => {
    setType(event.target.value);
  };
        
  const changeYearsOfStay = event => {   
    setLength(event.target.value);
  };
  
  const changeLastContribution = date => {    
    setLastContribution(date)
  };
  
        
  const doCalculate = useCallback(async () => {
    if (isCalculating) return
    setIsCalculating(true);
    
    fetch(`https://services.ltdrive.net/public/pension/calculate?category=${category}&type=${type}&lastContribution=${lastContribution}&length=${length}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setIsCalculating(false);
          setError(false);
          console.log(result);
          if(result.status == "error") {
            setError(true);
            setErrorMessage(result.result.error_message);
          } else {            
            setItems(result.result);
          }
        },        
        (error) => {
          setIsCalculating(false);
          setError(true);
          console.log("error");
        }
      )
    console.log("calculating");    
    //if (isMounted.current) // only update if we are still mounted
    //  setIsCalculating(false);
      
  }, [isCalculating]) 
  
        
  const categoryList = [
      {value : 'cat_1', text : 'Category I'},
      {value : 'cat_2', text : 'Category II'},
      {value : 'cat_3', text : 'Category III'}
  ];
  
  const calcTypeList = [
      {value : 'refund', text : 'Lump-sum Withdrawal Payments'},
      {value : 'old_age', text : 'Old-age Basic Pension'}
  ];
  
   
  
  return (
      <div>
        <Container maxWidth="sm" className="Pension-container">
          <form>
            <h2>Details</h2>
            <div>
              <SelectCommon
                label="Coverage"
                id="select-category"
                value={category}
                items={categoryList}
                handleChange={changeCategory}
              />
              <IconButton  color="primary">
                <HelpIcon />
              </IconButton>
              <Input label="Years of Stay" id="input-years"  
                type='number'value={length} changed={e => changeYearsOfStay(e)}
                onChange={changeYearsOfStay}
              />
            </div>    
            <div>
              <SelectCommon
                label="Type"
                id="select-type"
                value={type}
                items={calcTypeList}
                handleChange={changeType}
              />
              <IconButton  color="primary">
                <HelpIcon />
              </IconButton>
            </div>    

            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                      margin="normal"
                      id="input-last-contribution"
                      label="Last Contribution"
                      format="yyyy/MM/dd"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      onChange={changeLastContribution}
                    />
               </MuiPickersUtilsProvider>
            </div>
            <div className="Pension-container-action"> 
              <Button variant="contained" color="primary"
                 onClick={doCalculate}
                >
                Calculate
              </Button>
            </div>

          </form>
        </Container>

        <Container maxWidth="m" className="Pension-container Pension-result">
          <ResultBody />
        </Container>
        </div>
    );
  
}


export default Pension;