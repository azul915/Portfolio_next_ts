import React from "react"
import { NextPage } from "next"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import fetch from "isomorphic-unfetch"
import MainImg from "../components/mainImg/MainImg"
import Profile from "../components/Profile"
import Skills from "../components/skills/Skills"
import Products from "../components/products/Products"
import Blog from "../components/blog/Blog"
import { Skill, Post } from "../interfaces"
import { mainImgContents } from "../utils/config"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {},
  section: {
    paddingBottom: 3,
    paddingTop: 3,
  },
  sectionHeader: {
    fontSize: 34,
    fontWeight: 300,
    paddingBottom: 0.5,
    paddingTop: 0.5,
    textAlign: 'center',
  },
})

type Props = {
  skills: Skill[]
  posts: Post[]
}

const Index: NextPage<Props> = (props: Props) => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MainImg cont={mainImgContents} />
      <Grid container>
        <Grid item xs={12} className={classes.section}>
          <Typography className={classes.sectionHeader} component="h2">
            Profile
            <Profile />
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography className={classes.sectionHeader} component="h2">
            Skills
            <Skills skills={props.skills} />
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography className={classes.sectionHeader} component="h2">
            Products
            <Products />
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.section}>
          <Typography className={classes.sectionHeader} component="h2">
            Blog
            <Blog posts={props.posts}/>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )

}

Index.getInitialProps = async () => {

    // api側のコンテナが作成される度にipが変更されるので、static ipを振る必要がある
    const skills = await fetch("http://172.19.0.1:1999/skills")
    const skills_data = await skills.json()

    const qiita = await fetch("https://qiita.com/api/v2/users/azul915/items")
    const qiita_data = await qiita.json()

    return { 
        skills: skills_data,
        posts: qiita_data
    }

}

export default Index
