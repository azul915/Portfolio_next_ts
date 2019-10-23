import * as React from 'react'

import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import { NextPage } from 'next'

import MainImg from '../components/MainImg'
import Profile from '../components/Profile'
import Skills from '../components/Skills'
import Products from '../components/Products'
import Blog from '../components/Blog'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Kosei Aoyagi">
      <Grid container>
        <Grid item xs={12}>
          <MainImg/>
        </Grid>

        <Grid item xs={12}>
          <Profile/>
        </Grid>

        <Grid item xs={12}>
          <Skills/>
        </Grid>

        <Grid item xs={12}>
          <Products/>
        </Grid>

        <Grid item xs={12}>
          <Blog/>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
