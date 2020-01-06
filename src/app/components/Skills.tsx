import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CardActionArea, Card, CardContent, CardMedia, Hidden } from '@material-ui/core';
import axios from 'axios';

interface Skill {
    category: {
        id: number;
        name: string;
    };
    created_at: string;
    detail: string;
    duration: number;
    name: string;
    self_evaluation: number;
    term: string;
}

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
    const skills: Skill[] = [];
    const [data, setData] = useState({ skills });

    const fetchData = async () => {
        const result = await axios('http://localhost:1999/skills?term=serverside',);
        setData(result.data);
    };

    useEffect(() => { fetchData(); }, []);

    const list = data.skills.map((s: Skill) => {
        return (
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2">
                                    {s.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {s.term}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {s.detail}
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
        <div>
            <h1>This is Skills!!</h1>
            <Grid container spacing={4} >
                {list}
            </Grid>
        </div>
    );

}

export default Skills