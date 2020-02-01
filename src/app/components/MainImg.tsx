import * as React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

const MainImg: React.FC = () => {

    const classes = useStyles();

    return (
        <div>
            <Typed
            className={classes.root}
            strings={[
                'Hi! I\'m Kosei Aoyagi',
                'I\'m a Software Engineer!!']}
                typeSpeed={40}
                backSpeed={50}
                loop >
            </Typed>
        </div>
    );

};

export default MainImg