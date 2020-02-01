import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';

import { Skill } from '../interfaces';

type Props = {
    skills: Skill[];
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

const Skills: React.FC<Props> = (props: Props) => {

    const classes = useStyles();

    const serverside = props.skills.filter(skill => skill.term === 'serverside');
    const frontend = props.skills.filter(skill => skill.term === 'frontend');
    const infrastructure = props.skills.filter(skill => skill.term === 'infrastructure');

    return (
        <div>
            <Grid container spacing={4} >

                {serverside.map((skill, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <CardActionArea component="a" href="#">
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component="h2">
                                            {skill.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {skill.term}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {skill.detail}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}

                {frontend.map((skill, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <CardActionArea component="a" href="#">
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component="h2">
                                            {skill.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {skill.term}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {skill.detail}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}

                {infrastructure.map((skill, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <CardActionArea component="a" href="#">
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component="h2">
                                            {skill.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {skill.term}
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {skill.detail}
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}

            </Grid>
        </div>
    );

};

export default Skills