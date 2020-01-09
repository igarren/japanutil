import React, {Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import SelectCommon from '../../components/ui/select/SelectCommon';
import './pension.css';


//const Pension = () => {
  
export default class MainBody extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isCalculating: false
    };
  }
  
  CalcOutput() {
    if(this.state.isCalculating) {
      return (<div>Loading...</div>);
    } else {
      return (<div>NoData</div>);
              
    }
  };
              
  render(){
  
  
  const changeCategory = event => {
    console.log(event.target.value);
    //setCategory(event.target.value);
  };
  const changeType = event => {
    console.log(event.target.value);
    //setCategory(event.target.value);
  };
  
  const doCalculate = event => {
    this.state.isCalculating = true;
    this.setState({
      isCalculating: true,
    });
    console.log("calculating");
  };
  
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
      <Container maxWidth="xs" className="Pension-container">
        <form>
          <h2>Details</h2>
          <div>
            <SelectCommon
              label="Coverage"
              id="select-category"
              items={categoryList}
              handleChange={changeCategory}
            />
            <IconButton  color="primary">
              <HelpIcon />
            </IconButton>
            <TextField label="Years of Stay" id="input-years"/>
          </div>    
          <div>
            <SelectCommon
              label="Type"
              id="select-type"
              items={calcTypeList}
              handleChange={changeType}
            />
            <IconButton  color="primary">
              <HelpIcon />
            </IconButton>
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
        {this.CalcOutput()}
      </Container>
      </div>
  );
  }
}

