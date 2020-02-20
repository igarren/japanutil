import React, { useState, useEffect } from 'react';

import Layout from "../components/navigation/layout/layout";
import SEO from "../components/seo";
import classes from '../styles/immigration.module.scss';

import Select from '../components/ui/select/select';
import Input from '../components/ui/input/input';

import Grid from '@material-ui/core/Grid';
import Section from '../components/ui/section/section';
import CustomRadio from '../components/ui/radio/radio';
import CustomCheckbox from '../components/ui/checkbox/checkbox';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const activities = [
    {text : 'Academic research', value : 'acad'},
    {text : 'Advanced specialized･technical', value : 'tech'},
    {text : 'Business management', value : 'ba'},
];
const experience = [
    {text : 'None', value : ''},
    {text : '3 years or more', value : '3'},
    {text : '5 years or more', value : '5'},
    {text : '7 years or more', value : '7'},
    {text : '10 years or more', value : '10'},
];
const education = [
    {text : 'Holder of a doctor’s degree (excluding professional degrees)',  value : 'dr'},
    {text : 'Holder of a master’s degree (including professional degrees)',  value : 'ma'},
    {text : 'Holder of a bachelor’s degree or acquisition of an education equivalent thereto (excluding holders of a doctor’s degree or master’s degree)',  value : 'bs'},
];

const license = [
    {text : 'Have one',  value : '5'},
    {text : 'Have more than one',  value : '10'},
];

const japaneseLanguage = [
    {text : 'I Either graduated from a foreign university with a major in Japanese-language, or have passed the N1 level of the Japanese-Language Proficiency Test or its equivalent.',  value : '15'},
    {text : 'II Have passed the N2 level of the Japanese-Language Proficiency Test or equivalent.※',  value : '10'},
];


const Immigration = () => {

    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [selectedActivity, setSelectedActivity] = useState('acad');
    const [selectedEducation, setSelectedEducation] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedCareer, setSelectedCareer] = useState('');
    const [selectedLicense, setSelectedLicense] = useState('');
    const [chkMoreDegree, setChkMoreDegree] = useState(false);
    const [chkForeign, setChkForeign] = useState(false);
    const [chkJapanGraduate, setChkJapanGraduate] = useState(false);
    const [chkProject, setChkProject] = useState(false);
    const [chkUniversity, setChkUniversity] = useState(false);
    const [chkTraining, setChkTraining] = useState(false);
    const [chkDirector, setChkDirector] = useState(false);
    const [chkBoard, setChkBoard] = useState(false);
    const [chkInvestment, setChkInvestment] = useState(false);
    const [chkResearch, setChkResearch] = useState({
        first : false,
        second : false,
        third : false,
        fourth : false
    });
    const [chkOrganization, setChkOrganization] = useState({
        first : false,
        second : false,
        third : false,
    });

    const [points, setPoints] = useState({
        activity: 0,
        age: 0,
        education: 0,
        language: 0,
        career: 0,
        additionalDegree : 0,
        salary: 0,
        research : 0,
        license : 0,
        org1 : 0,
        org2 : 0,
        org3 : 0,
        foreign : 0,
        japanGraduate : 0,
        mojProject : 0,
        mojUniversity : 0,
        mojTraining : 0,
        director : 0,
        board : 0,
        investment : 0,
    });

    const activitiesChangeHandler = event => {
        setSelectedActivity(event.target.value);

        let educationPoints = calculateEducationPoints(selectedEducation , event.target.value);
        let careerPoints = calculateCareerPoints(selectedCareer, event.target.value);
        let salaryPoints = calculateSalary(salary, event.target.value);
        let agePoints = calculateAgePoints(age, event.target.value);
        let directorPoints = points.director;
        let boardPoints = points.board;
        let researchPoints = points.research;
        let investmentPoints = points.investment;
        let licensePoints = points.license;

      
        if(event.target.value === 'ba') {
            researchPoints = 0;
            setChkResearch({first: false, second: false,third : false, fourth : false});
        } else {
            directorPoints = 0;
            boardPoints = 0;
            investmentPoints = 0;
            setChkBoard(false);
            setChkDirector(false);
            setChkInvestment(false);
        }

        if(event.target.value !== 'tech') {
            licensePoints = 0;
            setSelectedLicense('');
        }

        setPoints({...points,
                    ['education'] : educationPoints,
                    ['career'] : careerPoints,
                    ['salary'] : salaryPoints,
                    ['age'] : agePoints,
                    ['director'] : directorPoints,
                    ['board'] : boardPoints,
                    ['research'] : researchPoints,
                    ['investment'] : investmentPoints,
                    ['license'] : licensePoints,
                  });
    }
    
    const salaryChangeHandler = (event) => {
        
        const salaryValue = Number(event.target.value);
        setSalary(salaryValue);
        let salaryPoints = calculateSalary(salaryValue, selectedActivity);
        
        setPoints({...points,['salary'] : salaryPoints});
    }

    const ageChangeHandler = (event) => {
        
        const ageValue = Number(event.target.value);
        let agePoints = calculateAgePoints(ageValue, selectedActivity);
        setAge(ageValue);
        setPoints({...points,['age'] : agePoints});
    }


    const selectedEducationHandler = event => {
        let educationPoints = calculateEducationPoints(event.target.value, selectedActivity);
        setSelectedEducation(event.target.value);
        setPoints({...points,['education'] : educationPoints});
    }

    const languageChangeHandler = event => {
        setSelectedLanguage(event.target.value);
        setPoints({...points,['language'] : event.target.value});
    }

    const careerChangeHandler = event => {
      
        setSelectedCareer(event.target.value);
        const careerPoints =   calculateCareerPoints(event.target.value, selectedActivity);
        setPoints({...points,['career'] : careerPoints});
    }


    const selectedLicenseHandler = event => {
        setSelectedLicense(event.target.value);
        setPoints({...points,['license'] : event.target.value});

    }
 

    
    const foreignChangeHandler = () => {
        setChkForeign(!chkForeign);
    }
    const japanGraduateChangeHandler = () => {
        setChkJapanGraduate(!chkJapanGraduate);
    }
    const projectChangeHandler = () => {
        setChkProject(!chkProject);
    }
    const universityChangeHandler = () => {
        setChkUniversity(!chkUniversity);
    }
    const trainingChangeHandler = () => {
        setChkTraining(!chkTraining);
    }

    const researchChangeHandler = (label) => {
        setChkResearch({...chkResearch, [label] : !chkResearch[label]});
    } 

    const organizationChangeHandler = (label) => {
        setChkOrganization({...chkOrganization, [label] : !chkOrganization[label]});
    }

    useEffect(() => {
        if(chkResearch.first || chkResearch.second|| chkResearch.third || chkResearch.fourth) {
            setPoints({...points,['research'] : 15});
        } else {
            setPoints({...points,['research'] : 0});
        }
     }, [chkResearch]);

    useEffect(() => {
        setPoints({...points,['org1'] : chkOrganization.first ? 10 : 0});
     }, [chkOrganization.first]);

    useEffect(() => {
        setPoints({...points,['org2'] : chkOrganization.second ? 10 : 0});
     }, [chkOrganization.second]);

    useEffect(() => {
        setPoints({...points,['org3'] : chkOrganization.third ? 5 : 0});
     }, [chkOrganization.third]);

    useEffect(() => {
         setPoints({...points,['additionalDegree'] : chkMoreDegree ? 5 : 0});
     }, [chkMoreDegree]);
     
    useEffect(() => {
         setPoints({...points,['foreign'] : chkForeign ? 5 : 0});
     }, [chkForeign]);

    useEffect(() => {
         setPoints({...points,['japanGraduate'] : chkJapanGraduate ? 10 : 0});
     }, [chkJapanGraduate]);

    useEffect(() => {
         setPoints({...points,['mojProject'] : chkProject ? 10 : 0});
     }, [chkProject]);

    useEffect(() => {
         setPoints({...points,['mojUniversity'] : chkUniversity ? 10 : 0});
     }, [chkUniversity]);

    useEffect(() => {
         setPoints({...points,['mojTraining'] : chkTraining ? 5 : 0});
     }, [chkTraining]);

    useEffect(() => {
         setPoints({...points,['director'] : chkDirector ? 10 : 0});
     }, [chkDirector]);

    useEffect(() => {
         setPoints({...points,['board'] : chkBoard ? 5 : 0});
     }, [chkBoard]);

    useEffect(() => {
         setPoints({...points,['investment'] : chkInvestment ? 5 : 0});
     }, [chkInvestment]);

    const sumValues = obj => Object.values(obj).reduce((a, b) => Number(a)+ Number(b));



    const calculateCareerPoints =  ( years , activity ) => {
        let careerPoints = 0;
        if(activity === 'ba') {
            switch (years ){
                case '10':
                    careerPoints = 25;
                    break;
                case '7':
                    careerPoints = 20;
                    break;
                case '5':
                    careerPoints = 15;
                    break;
                case '3':
                    careerPoints = 10;
                    break;
                default :
                    careerPoints = 0;
                    break;
            }

        } else {
            switch (years){
                case '10':
                    careerPoints = 20;
                    if(activity === 'acad')careerPoints = 15;
                    break;
                case '7':
                    careerPoints = 15;
                    break;
                case '5':
                    careerPoints = 10;
                    break;
                case '3':
                    careerPoints = 5;
                    break;
                default :
                    careerPoints = 0;
                    break;
            }
            
        }
        
        return careerPoints;
    }

    const calculateEducationPoints =(education, activity) =>{
        let educationPoints = 0;
        switch (education) {
            case 'dr':
                if(activity === 'ba'){
                    educationPoints = 20;
                }
                else{
                    educationPoints = 30;
                }
                break;
            case 'ma':
                educationPoints = 20;
                break;
            case 'bs':
                educationPoints = 10;
                break;
            default:
                break;
        }
        return educationPoints;
    }


    const calculateSalary=(salaryValue, activity) => {
        let salaryPoints = 0;
        if(activity === 'ba') {
            if(salaryValue > 29999999) {
                salaryPoints = 50
            } else if(salaryValue > 24999999 && salaryValue < 30000000) {
                salaryPoints = 40
            } else if(salaryValue > 19999999 && salaryValue < 25000000) {
                salaryPoints = 30
            } else if(salaryValue > 14999999 && salaryValue < 20000000) {
                salaryPoints = 20
            } else if(salaryValue > 9999999 && salaryValue < 15000000) {
                salaryPoints = 10
            }
        } else {
            if(salaryValue > 9999999) {
                salaryPoints = 40
            } else if(salaryValue > 8999999 && salaryValue < 10000000) {
                salaryPoints = 35
            } else if(salaryValue > 7999999 && salaryValue < 9000000) {
                salaryPoints = 30
            } else if(salaryValue > 6999999 && salaryValue < 8000000) {
                if (age < 40) {
                    salaryPoints = 25
                }
            } else if(salaryValue > 5999999 && salaryValue < 7000000) {
                if (age < 40) {
                    salaryPoints = 20
                }
            } else if(salaryValue > 4999999 && salaryValue < 6000000) {
                if (age < 35) {
                    salaryPoints = 15
                }
            } else if(salaryValue > 3999999 && salaryValue < 5000000) {
                if (age < 30) {
                    salaryPoints = 10
                }
            }
        }
        return salaryPoints;
    }


    const calculateAgePoints =(ageValue , activity) => {
        let agePoints = 0;
        if (activity !== 'ba') {
            if(ageValue >　0 && ageValue < 30 ) {
                agePoints = 15;
            }else if (ageValue >　29 && ageValue < 35) {
                agePoints = 10;
            }else if(ageValue > 34 && ageValue < 40) {
                agePoints = 5;
            }
        }
        return agePoints;
    }


    let researchPlaceHolder = '';
    if(selectedActivity !== 'ba') {
        researchPlaceHolder =  <Grid item xs={12} >
                                 <h3>Research Activities</h3>
                                    <CustomCheckbox change={() => researchChangeHandler('first')}  checked ={chkResearch.first} label='Patent invention 1 item or more' />
                                    <CustomCheckbox change={() => researchChangeHandler('second')}  checked ={chkResearch.second} label='Have conducted projects financed by a competitive fund, etc. by a foreign national government at least three times' />
                                    <CustomCheckbox change={() => researchChangeHandler('third')}  checked ={chkResearch.third} label='Have published at least three papers in academic journals listed in the academic journal database' />
                                    <CustomCheckbox change={() => researchChangeHandler('fourth')}  checked ={chkResearch.fourth} label="Have made other research achievements recognized by Japan's Minister of Justice " />
                                </Grid >;
    }

    let positionPlaceHolder = '';  
    let investmenstPlaceHolder = '';
    let licensePlaceHolder = '';
    if(selectedActivity === 'ba') {
        positionPlaceHolder =  <Grid item xs={12} >
                                 <h3>Position</h3>
                                    <CustomCheckbox change={() => setChkDirector(!chkDirector)}  checked ={chkDirector} label='Person to  be accepted as a representative director or representative executive officer ' />
                                    <CustomCheckbox change={() => setChkBoard(!chkBoard)}  checked ={chkBoard} label='A member of the board of directors, executive officer, or executive member ' />
                                </Grid >;
                                
        investmenstPlaceHolder = <CustomCheckbox change={() => setChkInvestment(!chkInvestment)}  checked ={chkInvestment} label='Investment of 100 million yen or more in trade or other business conducted by a public or private organization in Japan ' />;
                             
    }

    if(selectedActivity === 'tech') {
        licensePlaceHolder =   <Grid item xs={12} >
                                    <h3>License</h3>
                                    <p> Either have a national license of Japan (a license that authorizes you to conduct the relevant operation or use the relevant name), 
                                        or have passed an examination or have a license listed in the relevant IT notification</p>
                                        <CustomRadio data={license} change ={selectedLicenseHandler} value={selectedLicense} />
                                </Grid >;       
    }

    let disqusConfig = {
        url: `www.japanutil.com`,
        identifier: 'immigration',
        title: 'Immigration',
    }

    return (
        <Layout>
            <SEO title="Japan Immigration Points Calculator"
                description="Utility tool to help you find out your accumulated points to be eligible for Permanent Residency." />
            <div className={classes.Container}>
                <Section>
                    <h2>Immigration Point-based Calculator for HSF Professionals</h2>
                    <p className={classes.Notes}>This calculator helps you determine if you are qualified to apply for a permanent residency. Points are awarded based on your educational and professional background. Please note that this is only a guide to calculate your eligibility to and only the Immigration Bureau can decide if they will grant you a permanent residency. This utility tool was made to automate the official calculator document which can be found here.</p>
                    {/* <div style={{textAlign:'center'}}>Overall Points : {sumValues(points)}</div> */}
                    <Grid container justify="center" spacing={2}>
                        <Grid item sm={12}  xs={12} >
                            <Select text='Activity' value={selectedActivity}  data={activities} change={activitiesChangeHandler} />
                        </Grid >
                        <Grid item sm={4} xs={12} > <Input text='Salary' value ={salary} type='salary' change={salaryChangeHandler} /> </Grid >
                        <Grid item sm={4} xs={12} > <Input text='Age' value ={age} type='age' change={ageChangeHandler}/> </Grid >
                        <Grid item sm={4} xs={12} >  
                        <Select text='Professional Experience' value={selectedCareer}  data={experience}  change={careerChangeHandler}/> </Grid >
                      
                    </Grid >
                    <br/>
                    <fieldset >
                    <Grid container justify="center" spacing={2}>
                        {/* <h3>Bonus Points</h3> */}
                        <Grid item xs={12} >
                            <h3>Academic Background</h3>
                            <CustomRadio data={education} change ={selectedEducationHandler} value={selectedEducation} />
                            <CustomCheckbox label='Holder of doctor’s degrees,
                            master’s degrees or professional
                            degrees in multiple areas ' checked={chkMoreDegree} change={() => setChkMoreDegree(!chkMoreDegree)} />
                        </Grid >
                        
                        { researchPlaceHolder }

                        { positionPlaceHolder }

                        { licensePlaceHolder }

                        <Grid item xs={12} >
                            <h3>Contracting organizations</h3>
                           
                            <CustomCheckbox change={() => organizationChangeHandler('first')}  checked ={chkOrganization.first}  label='I. Work for an organization which receives financial support measures(measures provided for separately in a public notice) for the promotion of innovation' />
                            <CustomCheckbox change={() => organizationChangeHandler('second')}  checked ={chkOrganization.second}  label='II.  The organization is a company that comes under I, and constitutes a small or medium-sized enterprise under the Small and Medium-Sized Enterprise Basic Act ' />
                            <CustomCheckbox change={() => organizationChangeHandler('third')}  checked ={chkOrganization.third}  label="The applicant's organization is a small or medium-sized enterprise under the Small and Medium-sized Enterprise Basic Act and its total experiment and research costs and development costs exceed 3% of the amount remaining after deducting the amount of revenue from the transfer of fixed assets or securities from the total revenue (total sales)" />
                            
                        </Grid >
                       
                        <Grid item xs={12} >
                            <h3>Japanese language proficiency</h3>
                          
                            <CustomRadio data={japaneseLanguage} change ={languageChangeHandler} value={selectedLanguage} />
                            <p className={classes.Red}>※Excluding those who "graduated from a university or completed a course of a graduate school in Japan", and those who come under I. </p>
                        </Grid >
                        
                         <Grid item xs={12} >
                            <h3>Special  additions</h3>
                            <CustomCheckbox checked={chkForeign} change={foreignChangeHandler} label='Holder of a foreign work-related qualification, etc' />
                            <CustomCheckbox checked={chkJapanGraduate} change={japanGraduateChangeHandler} label='Either graduated from a Japanese university or completed a course of a Japanese graduate school ' />
                            <CustomCheckbox checked={chkProject} change={projectChangeHandler} label='Work on an advanced project in a growth field (limited to the project recognized by the Minister of Justice)' />
                            <CustomCheckbox checked={chkUniversity} change={universityChangeHandler} label='Graduation from a university separately specified by the Minister of Justice in a public notice' />
                            <CustomCheckbox checked={chkTraining} change={trainingChangeHandler} label="Have completed training conducted by JICA as part of the Innovative Asia Project implemented by the Ministry of Foreign Affairs" />
                            {investmenstPlaceHolder}
                        </Grid >
                    </Grid >
                    </fieldset>
                    <CommentCount config={disqusConfig} placeholder={'...'} />
                    <Disqus config={disqusConfig} />
                </Section>
               
            </div>
        </Layout>
    )
}

export default Immigration;





