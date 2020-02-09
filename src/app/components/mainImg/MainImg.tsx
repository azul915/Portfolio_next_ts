import * as React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Cont } from '../../interfaces';

const useStyles = makeStyles(theme => ({
    typed: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'conter',
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

type Props = {
    cont: Cont
}

const MainImg: React.FC<Props> = (props: Props) => {

    const classes = useStyles();

    const cont = props.cont;

    return (
        <>
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${cont.image})` }}>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                <Typed
                                    className={classes.typed}
                                    strings={cont.messages}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop>
                                </Typed>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );

};

export default MainImg