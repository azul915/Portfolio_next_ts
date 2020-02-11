import * as React from 'react';
import { NextPage } from 'next';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import MainImg from '../components/mainImg/MainImg'
import Profile from '../components/Profile';
import Skills from '../components/skills/Skills';
import Products from '../components/Products';
import Blog from '../components/blog/Blog';
import { Skill, Post } from '../interfaces';
import { mainImgContents } from '../utils/config';

type Props = {
    skills: Skill[];
    posts: Post[];
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
                    <Blog posts={props.posts}/>
                </Grid>
            </Grid>
        </Layout>
    );

};

IndexPage.getInitialProps = async () => {

    const skills = await fetch('http://192.168.100.113:1999/skills');
    const skills_data = await skills.json();

    const qiita = await fetch('https://qiita.com/api/v2/users/azul915/items');
    const qiita_data = await qiita.json();

    return { 
        skills: skills_data,
        posts: qiita_data
    }

};

export default IndexPage
