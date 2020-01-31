import React from 'react';

import Layout from "../components/navigation/layout/layout";
import SEO from "../components/seo";
import classes from '../styles/immigration.module.scss';

import Select from '../components/ui/select/select';
import Input from '../components/ui/input/input';

import Grid from '@material-ui/core/Grid';
import Section from '../components/ui/section/section';
import CustomRadio from '../components/ui/radio/radio';
import CustomCheckbox from '../components/ui/checkbox/checkbox';


const Immigration = () => {

    return (
        <Layout>
            <SEO title="Japan Immigration Points Calculator"
                description="Utility tool to help you find out your accumulated points to be eligible for Permanent Residency." />
            <div className={classes.Container}>
                <Section>

                    <Grid container justify="center" spacing={2}>
                        <Grid item sm={12}  xs={12} >
                            <h3>Tell me more about you</h3><br/>
                          
                            <Select text='Activity' />
                        </Grid >
                        <Grid item sm={4} xs={12} > <Input text='Salary' /> </Grid >
                        <Grid item sm={4} xs={12} > <Input text='Age' /> </Grid >
                        <Grid item sm={4} xs={12} >  <Select text='Professional Experience' /> </Grid >
                        <Grid item xs={12} >
                            <h3>Academic Background</h3>
                            <CustomRadio />
                            <CustomCheckbox label='Holder of doctor’s degrees,
                            master’s degrees or professional
                            degrees in multiple areas ' />
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
                                <CustomRadio />
                            
                        </Grid >
                    </Grid >
                </Section>

            </div>


        </Layout>
    )
}

export default Immigration;





