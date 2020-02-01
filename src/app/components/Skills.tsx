import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, CardActionArea, Card, CardContent } from '@material-ui/core';

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

const Skills: React.FC<Props> = (props: Props) => {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={4} >
                {props.skills.map((skill, index) => (
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

}

export default Skills