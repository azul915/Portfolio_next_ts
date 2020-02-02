import * as React from 'react';
import { Grid } from '@material-ui/core';
import Term from './Term'
import { Skill } from '../interfaces';

type Props = {
    skills: Skill[];
}


const Skills: React.FC<Props> = (props: Props) => {

    const serverside: Skill[] = props.skills.filter(skill => skill.term === 'serverside');
    const frontend: Skill[] = props.skills.filter(skill => skill.term === 'frontend');
    const infrastructure: Skill[] = props.skills.filter(skill => skill.term === 'infrastructure');

    return (
        <>
            <Grid container spacing={4} >
                <Term term={serverside} />
            </Grid>
            <Grid container spacing={4} >
                <Term term={frontend} />
            </Grid>
            <Grid container spacing={4} >
                <Term term={infrastructure} />
            </Grid>
        </>
    );

};

export default Skills