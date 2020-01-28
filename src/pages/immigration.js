import React from 'react';

import Layout from "../components/navigation/layout/layout";
import SEO from "../components/seo";
import classes from '../styles/immigration.module.scss';

import Select from '../components/ui/select/select';
import Input from '../components/ui/input/input';

import Grid from '@material-ui/core/Grid';
import Section from '../components/ui/section/section';


const Immigration = () => {

    return (
        <Layout>
            <SEO title="Japan Immigration Points Calculator"
                description="Utility tool to help you find out your accumulated points to be eligible for Permanent Residency." />
            <div className={classes.Container}>
                <Section title='Age and Salary'>
                    <Input text='Age' />
                    <br />
                    <Input text='Salary' />
                </Section>
                <Section title='Activity'>
                    <Select text='Activity' />
                </Section>
            </div>


        </Layout>
    )
}

export default Immigration;





