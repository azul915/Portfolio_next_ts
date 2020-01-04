import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CardActionArea, Card, CardContent, CardMedia, Hidden } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

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
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2">
                                    {item.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {item.term}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {item.detail}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia className={classes.cardMedia}></CardMedia>
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        );
    })

    return (
        <Grid container spacing={4} >
            {list}
        </Grid>
    );

}

export default Skills