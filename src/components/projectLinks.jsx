import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

import ProjectLine from './projectLine';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';

function ProjectLinks({ git, link }) {

    return (
        <Container
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className="centerAll fullSize"
        >
            {/* GIT */}
            {git ? (
                <ProjectLine icon={<GitHubIcon fontSize="small"/>} type={"link"} data={git} />
            ) : null}

            {/* LINK */}
            {link ? (
                <ProjectLine icon={<LaunchOutlinedIcon fontSize="small"/>} type={"link"} data={link} />
            ) : null}
        </Container>
    );
}

export default ProjectLinks;

/* Style */
const Container = styled(Grid)`
    margin: 10px !important;
`;
