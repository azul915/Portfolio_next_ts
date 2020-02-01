import * as React from 'react';
import { NextPage } from 'next';

import Grid from '@material-ui/core/Grid';

import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import MainImg from '../components/MainImg'
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Products from '../components/Products';
import Blog from '../components/Blog';

interface Props {
    skills: Array<{
        category: Array<{
            id: number
            name: string
        }>
        created_at: string
        detail: string
        duration: number
        name: string
        self_evaluation: number
        term: string
    }>
}

const IndexPage: NextPage<Props> = (props: Props) => {

    const skills = props.skills;

    return (
        <Layout title="">
            <Grid container>
                <Grid item xs={12}>
                    <MainImg />
                </Grid>

                <Grid item xs={12}>
                    <Profile />
                </Grid>

                <Grid item xs={12}>
                    <Skills skills={skills} />
                </Grid>

                <Grid item xs={12}>
                    <Products />
                </Grid>

                <Grid item xs={12}>
                    <Blog />
                </Grid>
            </Grid>
        </Layout>
    );

};

IndexPage.getInitialProps = async () => {

    const res = await fetch('http://192.168.100.113:1999/skills?term=serverside');
    const data = await res.json();
    return { skills: data }

};

export default IndexPage
