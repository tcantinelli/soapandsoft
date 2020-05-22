import React, { useState } from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import NeoBlock from './neoBlock';

import Command from './command';

//CONTENTS
import ProjectStart from './projectStart';
import ProjectInfos from './projectInfos';
import ProjectLinks from './projectLinks';
import ProjectVideo from './projectVideo';
import ProjectImages from './projectImages';

// ICONS
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

function Project({ project, delay }) {

    const [theProject, setProject] = useState(project);
    const [theType, setType] = useState('cancel');

    //Contenu du block principal gauche
    const getContent = (type) => {
        switch (type) {
            case 'info':
                return <ProjectInfos project={theProject} />
            case 'links':
                return <ProjectLinks git={theProject.git} link={theProject.link}/>
            case 'video':
                return <ProjectVideo title={theProject.video} />
            case 'images':
                return <ProjectImages images={theProject.images} type={theProject.type} />
            default:
                return <ProjectStart project={theProject} />
        }
    }

    //Action click command
    const onCommandClick = (type) => {

        let newList = theProject.state;

        for (var key in newList) {
            if(newList[key] !== null) {
                newList[key] = key === type ? true : false;
            }
        }

        setType(type);

		setProject(previous => {
            return {...previous, state: newList}
        });
    }

    return (
        <ProjectContainer
            item
            xs={12} sm={9} md={6} lg={5} xl={4}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className="animated zoomIn"
            delay={delay}
        >
            {/* LEFT MAIN BLOCK */}
            <MainBlockContainer
                item
                xs={10}
                className="centerAll fullSize"
            >
                <NeoBlock
                    type={project.state.cancel ? "in" : "out"}
                    className="centerAll"
                    action={null}
                >
                    {getContent(theType)}
                </NeoBlock>
            </MainBlockContainer>

            {/* RIGHT COMMANDS BLOCK */}
            <Grid
                item
                xs={2}
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                { project.state.info !== null ?
                    <Command state={project.state.info} type={'info'} action={onCommandClick} key={'info'} >
                        <InfoOutlinedIcon />
                    </Command>
                : null }
                { project.state.images !== null ?
                    <Command state={project.state.images} type={'images'} action={onCommandClick} key={'images'} >
                        <ImageOutlinedIcon />
                    </Command>
                : null }
                { project.state.video !== null ?
                    <Command state={project.state.video} type={'video'} action={onCommandClick} key={'video'} >
                        <VideocamOutlinedIcon />
                    </Command>
                : null }
                { project.state.links !== null ?
                    <Command state={project.state.links} type={'links'} action={onCommandClick} key={'links'} >
                        <LinkOutlinedIcon />
                    </Command>
                : null }
                { project.state.cancel !== null ?
                    <Command state={project.state.cancel} type={'cancel'} action={onCommandClick} key={'cancel'} >
                        <ClearOutlinedIcon />
                    </Command>
                : null }

            </Grid>
        </ProjectContainer>
    );
}

export default Project;

/* Style */
const ProjectContainer = styled(Grid)`
    height: 400px !important;
    min-height: 400px !important;
    max-height: 400px !important;
    padding: 15px !important;
    animation-duration: 0.5s;
	animation-delay: ${props => props.delay}s;
`;

const MainBlockContainer = styled(Grid)`
	padding-right: 5px !important;

    @media(max-width: 500px) {
	padding-right: 15px !important;
    }
`;
