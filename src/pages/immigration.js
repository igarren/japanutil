import React, { useState } from 'react';

import Layout from "../components/navigation/layout/layout";
import SEO from "../components/seo";
import classes from '../styles/immigration.module.scss';

import Select from '../components/ui/select/select';
import Input from '../components/ui/input/input';

import Grid from '@material-ui/core/Grid';
import Section from '../components/ui/section/section';
import CustomRadio from '../components/ui/radio/radio';
import CustomCheckbox from '../components/ui/checkbox/checkbox';

const activities = [
    {text : 'Academic research', value : 'acad'},
    {text : 'Advanced specialized･technical', value : 'tech'},
    {text : 'Business management', value : 'ba'},
];
const experience = [
    {text : '3 years or more', value : '5'},
    {text : '5 years or more', value : '10'},
    {text : '7 years or more', value : '15'},
    {text : '10 years or more', value : '20'},
];
const education = [
    {text : 'Holder of a doctor’s degree (excluding professional degrees)',  value : 'dr'},
    {text : 'Holder of a master’s degree (including professional degrees)',  value : 'ma'},
    {text : 'Holder of a bachelor’s degree or acquisition of an education equivalent thereto (excluding holders of a doctor’s degree or master’s degree)',  value : 'bs'},
];


const Immigration = () => {

    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [selectedEducation, setSelectedEducation] = useState('');
    const [selectedCareer, setSelectedCareer] = useState('');
    const [chkMoreDegree, setChkMoreDegree] = useState(false);
    const [points, setPoints] = useState({
        ativity: 0,
        age: 0,
        education: 0,
        career: 0,
        additionalDegree : 0,
        salary: 0
    });

    const selectedEducationHandler = event => {
        let educationPoints = 0;
        switch (event.target.value) {
            case 'dr':
                educationPoints = 30;
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
        setSelectedEducation(event.target.value);
        setPoints({...points,['education'] : educationPoints});

    }
    const careerChangeHandler = event => {
        setSelectedCareer(event.target.value);
        setPoints({...points,['career'] : event.target.value});
    }

    const additionalDegreeHandler = () => {
        setChkMoreDegree(!chkMoreDegree);
        setPoints({...points,['additionalDegree'] : chkMoreDegree ? 0 : 5});
    }

    const ageChangeHandler = (event) => {
        let agePoints = 0;
        const ageValue = Number(event.target.value);

        if(ageValue >　0 && ageValue < 30 ) {
            agePoints = 15;
        }else if (ageValue >　29 && ageValue < 35) {
            agePoints = 10;
        }else if(ageValue > 34 && ageValue < 40) {
            agePoints = 5;
        }

        setAge(ageValue);
        setPoints({...points,['age'] : agePoints});
    }


    const salaryChangeHandler = (event) => {
        let salaryPoints = 0;
        const salaryValue = Number(event.target.value);

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
        setSalary(salaryValue);
        setPoints({...points,['salary'] : salaryPoints});
    }
    const sumValues = obj => Object.values(obj).reduce((a, b) => Number(a)+ Number(b));

    return (
        <Layout>
            <SEO title="Japan Immigration Points Calculator"
                description="Utility tool to help you find out your accumulated points to be eligible for Permanent Residency." />
            <div className={classes.Container}>
                <Section>
                    <div style={{textAlign:'center'}}>Overall Points : {sumValues(points)}</div>
                    <Grid container justify="center" spacing={2}>
                        <Grid item sm={12}  xs={12} >
                            <h3>About you</h3><br/>
                            <Select text='Activity' data={activities} />
                        </Grid >
                        <Grid item sm={4} xs={12} > <Input text='Salary' value ={salary} type='number' change={salaryChangeHandler} /> </Grid >
                        <Grid item sm={4} xs={12} > <Input text='Age' value ={age} type='number' change={ageChangeHandler}/> </Grid >
                        <Grid item sm={4} xs={12} >  
                        <Select text='Professional Experience' value={selectedCareer}  data={experience}  change={careerChangeHandler}/> </Grid >
                        <Grid item xs={12} >
                            <h3>Academic Background</h3>
                            <CustomRadio data={education} change ={selectedEducationHandler} value={selectedEducation} />
                            <CustomCheckbox label='Holder of doctor’s degrees,
                            master’s degrees or professional
                            degrees in multiple areas ' checked={chkMoreDegree} change={additionalDegreeHandler} />
                        </Grid >
                    </Grid >
                    <br/>
                    <Grid container justify="center" spacing={2}>
                        <h3>Bonus Points</h3>
                       <Grid item xs={12} >
                            <h3>Research Activities</h3>
                                <CustomCheckbox label='Patent invention 1 item or more' />
                                <CustomCheckbox label='Have conducted projects financed by a competitive fund, etc. by a foreign national government at least three times' />
                                <CustomCheckbox label='Have published at least three papers in academic journals listed in the academic journal database' />
                                <CustomCheckbox label="Have made other research achievements recognized by Japan's Minister of Justice " />
                            
                        </Grid >
                        <Grid item xs={12} >
                            <h3>License</h3>
                            <p> Either have a national license of Japan (a license that authorizes you to conduct the relevant operation or use the relevant name), 
                                or have passed an examination or have a license listed in the relevant IT notification</p>
                                <CustomRadio data={education} change ={selectedEducationHandler} value={selectedEducation} />
                            
                        </Grid >

                        <Grid item xs={12} >
                            <h3>Contracting organizations</h3>
                            <p> Either have a national license of Japan (a license that authorizes you to conduct the relevant operation or use the relevant name), 
                                or have passed an examination or have a license listed in the relevant IT notification</p>
                            <CustomCheckbox label='I. Work for an organization which receives financial support measures(measures provided for separately in a public notice) for the promotion of innovation' />
                            <CustomCheckbox label='II.  The organization is a company that comes under I, and constitutes a small or medium-sized enterprise under the Small and Medium-Sized Enterprise Basic Act ' />
                            <CustomCheckbox label="The applicant's organization is a small or medium-sized enterprise under the Small and Medium-sized Enterprise Basic Act and its total experiment and research costs and development costs exceed 3% of the amount remaining after deducting the amount of revenue from the transfer of fixed assets or securities from the total revenue (total sales)" />
                            
                        </Grid >
                       
                        <Grid item xs={12} >
                            <h3>Japanese language proficiency</h3>
                          
                            <CustomCheckbox label='Holder of a foreign work-related qualification, etc' />
                            <CustomCheckbox label='Either graduated from a Japanese university or completed a course of a Japanese graduate school ' />
                            <CustomCheckbox label="The applicant's organization is a small or medium-sized enterprise under the Small and Medium-sized Enterprise Basic Act and its total experiment and research costs and development costs exceed 3% of the amount remaining after deducting the amount of revenue from the transfer of fixed assets or securities from the total revenue (total sales)" />
                            
                        </Grid >
                         <Grid item xs={12} >
                            <h3>Have Graduated from one of the following universities</h3>
                            <CustomRadio data={education} change ={selectedEducationHandler} value={selectedEducation} />
                        </Grid >
                         <Grid item xs={12} >
                            <h3>Special  additions</h3>
                            <CustomCheckbox label='Holder of a foreign work-related qualification, etc' />
                            <CustomCheckbox label='Either graduated from a Japanese university or completed a course of a Japanese graduate school ' />
                            <CustomCheckbox label="The applicant's organization is a small or medium-sized enterprise under the Small and Medium-sized Enterprise Basic Act and its total experiment and research costs and development costs exceed 3% of the amount remaining after deducting the amount of revenue from the transfer of fixed assets or securities from the total revenue (total sales)" />
                            <CustomCheckbox label="Work on an advanced project in a growth field with the involvement of the relevant ministries and agencies" />
                            <CustomCheckbox label="Have completed training conducted by JICA as part of the Innovative Asia Project implemented by the Ministry of Foreign Affairs" />
                        </Grid >
                    </Grid >
                </Section>
            </div>
        </Layout>
    )
}

export default Immigration;





