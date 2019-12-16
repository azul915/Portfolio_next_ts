import * as React from 'react'
import { useState } from 'react'
import { Typist } from 'react-typist'
import { makeStyles } from '@material-ui/core/styles'

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
})

const MainImg: React.FC = () => {

    const classes = useStyles();
    const [typing, setState] = useState({ typing: false });
    const typingDone = () => {
        setState({ typing: true });
    };
    
    return (
        {this:typing
            ?   <Typist
                    startDelay={400}
                    onTypingDone={typingDone}
                    useStyles={classes.root}
                >
                    <h1>Hi! I'm Kosei Aoyagi</h1>
                </Typist>
            : ''
        }
    );

}
export default MainImg