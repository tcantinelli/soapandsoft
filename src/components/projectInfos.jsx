import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

import ProjectLine from './projectLine';
import Tools from './projectTools';

// ICONS
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindowsOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';

function ProjectInfos({ project }) {

    return (
        <Container
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className="centerAll fullSize"
        >
            {/* TYPE */}
            <ProjectLine icon={<DesktopWindowsIcon fontSize="small"/>} type={"text"} data={project.type} delay={0.1}/>

            {/* DESCRIPTION */}
            <ProjectLine icon={<LibraryBooksOutlinedIcon fontSize="small"/>} type={"text"} data={project.description} delay={0.2} />

            {/* TOOLS */}
            <Tools tools={project.tools} size='20px' legend={true} delay={0.3} alignement='flex-start' />

            {/* TAGS */}
            <ProjectLine icon={<VpnKeyOutlinedIcon fontSize="small"/>} type={"tag"} data={project.hashtags} delay={0.4}/>
        </Container>
    );
}

export default ProjectInfos;

/* Style */
const Container = styled(Grid)`
    margin: 10px !important;
`;
