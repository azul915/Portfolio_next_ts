import * as React from 'react';
import { NextPage } from 'next';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import MainImg from '../components/mainImg/MainImg'
import Profile from '../components/Profile';
import Skills from '../components/skills/Skills';
import Products from '../components/Products';
import Blog from '../components/Blog';
import { Skill } from '../interfaces';
import { mainImgContents } from '../utils/config';

type Props = {
    skills: Skill[];
}

const IndexPage: NextPage<Props> = (props: Props) => {

    return (
        <Layout title="">
            <Grid container>
                <Grid item xs={12}>
                    <MainImg cont={mainImgContents} />
                </Grid>

                <Grid item xs={12}>
                    <Profile />
                </Grid>

                <Grid item xs={12}>
                    <Skills skills={props.skills} />
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

    const serverside_res = await fetch('http://192.168.100.113:1999/skills?term=serverside');
    const serverside_data = await serverside_res.json();

    const frontend_res = await fetch('http://192.168.100.113:1999/skills?term=frontend');
    const frontend_data = await frontend_res.json();

    const infrastructure_res = await fetch('http://192.168.100.113:1999/skills?term=infrastructure');
    const infrastructure_data = await infrastructure_res.json();

    const data = [].concat(serverside_data).concat(frontend_data).concat(infrastructure_data);
    return { skills: data }

};

export default IndexPage
