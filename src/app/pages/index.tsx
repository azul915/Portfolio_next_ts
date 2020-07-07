import React from "react"
import { NextPage } from "next"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import fetch from "isomorphic-unfetch"
import WallPaper from "../components/wallpaper/WallPaper"
import Profile from "../components/Profile"
import Skills from "../components/skills/Skills"
import Products from "../components/products/Products"
import Blog from "../components/blog/Blog"
import { Skill, Post } from "../interfaces"
import { greeting } from "../utils/config"

type Props = {
  skills: Skill[]
  posts: Post[]
}

const Index: NextPage<Props> = (props: Props) => {

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
           <WallPaper cont={greeting}></WallPaper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            Profile
            <Profile />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            Skills
            <Skills skills={props.skills} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            Products
            <Products />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            Blog
            <Blog posts={props.posts}></Blog>
          </Typography>
        </Grid>
      </Grid>
    </>
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
