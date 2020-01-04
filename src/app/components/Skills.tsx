import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

const Skills: React.FC = () => {

    const classes = useStyles();

    const skills = [
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"0001-01-01T00:00:00Z",
            detail:"SpringBootでAPIコンテナを実装したことがある。",
            duration:3,
            name:"Kotlin",
            self_evaluation:0,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-06-23T03:34:47.07Z",
            detail:"Java8で実装ができる",
            duration:18,
            name:"Java",
            self_evaluation:3,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-12-07T16:56:23.804817Z",
            detail:"SpringBootでAPIコンテナを実装したことがある。",
            duration:3,
            name:"Kotlin",
            self_evaluation:4,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-12-31T15:00:00Z",
            detail:"Seleniumでテストを書いたことがある",
            duration:3,
            name:"Python",
            self_evaluation:2,
            term:"serverside"
        },
        {
            category:{
                id:0,
                name:"言語"
            },
            created_at:"2019-06-23T06:52:28.755Z",
            detail:"基本的な文法は理解して、実装することができる。",
            duration:3,
            name:"Ruby",
            self_evaluation:2,
            term:"serverside"
        },
        {
            category:{
                id:2,
                name:"フレームワーク"
            },
            created_at:"2019-06-23T06:56:22.93Z",
            detail:"基本的なCRUDの実装経験がある。",
            duration:6,
            name:"Spring",
            self_evaluation:2,
            term:"serverside"
        },
        {
            category:{
                id:2,
                name:"フレームワーク"
            },
            created_at:"2019-06-23T06:27:35.065Z",
            detail:"基本的なCRUDを作成することができる。",
            duration:3,
            name:"rubyonRails",
            self_evaluation:2,
            term:"serverside"
        }
    ];

    const list = skills.map((item) => {
        return (
            <Paper className={classes.mainFeaturedPost}>
                <div className={classes.overlay}/>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {item.name}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {item.category.name}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {item.detail}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        );
    })

    return (
        <Grid container spacing={5} >
            {list}
        </Grid>
    );

}

export default Skills