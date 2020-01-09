import React, { useState } from 'react';
import CustomSelect from '../../components/ui/select/select';
import Input from '../../components/ui/input/input';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import classes from './calculator.module.css';

const Calculator = () => {
    let salaryWarning = '';
    const [activity, setActivity] = useState('');
    const [salary, setSalary] = useState('');
    const [bonus, setBonus] = useState({
        bonusOne: false,
        bonusTwo: false,
        bonusThree: false,
        bonusFour: false,
        bonusFive: false,
        bonusSix: false,
        bonusSeven: false,
        bonusEight: false,
        bonusNine: false,
        bonusTen: false,
        bonusEleven: false,
        bonusTwelve: false,
        bonusThirteen: false,
    });
    const items = [
        { value: 'academic', text: 'Academic research actitivies' },
        { value: 'technical', text: 'Specialized / Technical activities' },
        { value: 'business', text: 'Business management activities' }
    ];



    const salaryChangedHandler = (event) => {
        setSalary(event.target.value);
    }


    const bonusPointsHandler = name => event => {
        setBonus({ ...bonus, [name]: event.target.checked });
    };

    if (salary && (parseInt(salary.replace(/,/g, '')) < 3000000)) {
        salaryWarning = <p>Minimum 3,000,000</p>;
    }

    return (



        <div className={classes.Calculator}>
            <CustomSelect id='activity' items={items} selected={activity} changed={event => setActivity(event.target.value)} />
            <br />
            <TableContainer className={classes.Table} component={Paper} size='small'>
                <Table aria-label="calculator table">

                    <TableBody>
                        <TableRow key='academic'>
                            <TableCell component="th" scope="row">Academic<br />Background</TableCell>
                            <TableCell><Input type='salary' id='salary' label='Annual Salary' value={salary} changed={e => salaryChangedHandler(e)} /></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='career'>
                            <TableCell component="th" scope="row">Professional<br />Experience</TableCell>
                            <TableCell><Input type='salary' id='salary' label='Annual Salary' value={salary} changed={e => salaryChangedHandler(e)} /></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='salary'>
                            <TableCell component="th" scope="row">Salary</TableCell>
                            <TableCell>
                                <Input type='salary' id='salary' label='Annual Salary' value={salary} changed={e => salaryChangedHandler(e)} />
                                {salaryWarning}
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='Age'>
                            <TableCell component="th" scope="row">Age</TableCell>
                            <TableCell>
                                <Input type='salary' id='salary' label='Annual Salary' value={salary} changed={e => salaryChangedHandler(e)} />
                                
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <TableContainer className={classes.Table} component={Paper} size='small'>
                <Table aria-label="calculator table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                <h3> Bonus Points </h3>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='bonus-1'>
                            <TableCell component="th" scope="row">Bonus Point 1</TableCell>
                            <TableCell style={{ maxWidth: '260px' }}>
                                <p>
                                    An additional 10 points will be awarded in cases where
                                    the organization employing the applicant is a small or mediumsized enterprise.
                                </p>
                                <p>
                                    <FormControlLabel
                                        control={
                                            <Checkbox color="primary" checked={bonus.bonusOne} onChange={bonusPointsHandler('bonusOne')} value="checkedA" />
                                        }
                                        label="Claim Points"
                                    />
                                </p>
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-2'>
                            <TableCell component="th" scope="row">Bonus Point 2</TableCell>
                            <TableCell></TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-3'>
                            <TableCell component="th" scope="row">Bonus Point 3</TableCell>
                            <TableCell>

                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-4'>
                            <TableCell component="th" scope="row">Bonus Point 4</TableCell>
                            <TableCell>
                                <p>
                                    Work for an organization which receives
                                    financial support measures (measures
                                    provided for separately in a public
                                    notice) for the promotion of innovation
                                </p>
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-5'>
                            <TableCell component="th" scope="row">Bonus Point 5</TableCell>
                            <TableCell>
                                <p>
                                    Employed by a small or medium-sized
                                    enterprise whose experiment and
                                    research expenses add up to more than
                                    3% of the total revenue.
                                </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-6'>
                            <TableCell component="th" scope="row">Bonus Point 6</TableCell>
                            <TableCell>
                                <p>
                                    Holder of a foreign
                                    qualification, etc. related to the
                                    work
                               </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-7'>
                            <TableCell component="th" scope="row">Bonus Point 7</TableCell>
                            <TableCell>
                                <p>
                                    Acquisition of a degree
        from a Japanese institution of
        higher education
                               </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-8'>
                            <TableCell component="th" scope="row">Bonus Point 8 </TableCell>
                            <TableCell>
                                <p>
                                    Acquisition of Level
        N1 of the Japanese Language Proficiency
        Test (See Note 4), or a person who
        graduated from a foreign university
        having majored in Japanese language.
                               </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-9'>
                            <TableCell component="th" scope="row">Bonus Point 9</TableCell>
                            <TableCell>
                                <p>
                                    Acquisition of Level
        N2 of the Japanese Language
        Proficiency Test (See Note 5)
        (excluding points acquired
        through Bonus Points 7 or 8)
                               </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-10'>
                            <TableCell component="th" scope="row">Bonus Point 10</TableCell>
                            <TableCell>
                                <p>
                                    Work on an advanced project in
        a growth field (limited to the
        project recognized by the
        Minister of Justice)
                               </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-11'>
                            <TableCell component="th" scope="row">Bonus Point 11</TableCell>
                            <TableCell>
                                <p>
                                    Graduation from a university separately
        specified by the Minister of Justice in a
        public notice
                               </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow key='bonus-12'>
                            <TableCell component="th" scope="row">Bonus Point 12</TableCell>
                            <TableCell>
                                <p>
                                    Completion of the training
        separately specified by the Minister
        of Justice in a public notice (See
        Note 6)
                               </p>
                               
                            </TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}


export default Calculator;
