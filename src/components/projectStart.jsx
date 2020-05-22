import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

import Tools from './projectTools';

function ProjectStart({ project }) {

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className="centerAll fullSize"
        >
            {/* TITLE */}
            <Text item xs={11} >
                {project.title}
            </Text>
            {/* TECHNOS */}
            <Tools tools={project.tools} size='30px' legend={false} delay={null} alignement='space-evenly'/>
        </Grid>
    );
}

export default ProjectStart;

/* Style */
const Text = styled(Grid)`
    color: ${props => props.theme.colors.secondary};
	font-size: 2rem;
    text-shadow: 1px 1px 1px ${props => props.theme.colors.title};

`;
