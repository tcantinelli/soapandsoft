import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import Tool from './tool';
import useWindowSize from '../tools/dimensions';

function ProjectTools({ tools, size, legend, delay, alignement }) {

    const dimension = useWindowSize();

    return (
        <Container
            item xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={delay ? "animated fadeInDown" : ""}
            delay={delay}
        >
            {/* ICON */}
            { legend ?
            <Icon item xs={1}>
                <span>
                    <BuildOutlinedIcon size="small" />
                </span>
            </Icon>
            : null
            }

            {/* LIST TOOLS */}
            <Grid item xs={legend ? 11 : 12}
                container
                direction="row"
                justify={alignement}
                alignItems="center"
            >
                {tools.map((tool, index) => {
                    return <Tool
                        tool={tool}
                        size={size}
                        legend={legend}
                        key={tool._id}
                        width={dimension.width}
                        delay={delay ? 0.4 + index * 0.2 : 0}
                    />
                })}
            </Grid>
        </Container >
    );
}

export default ProjectTools;

/* Style */
const Container = styled(Grid)`
    animation-duration: ${props => props.delay ? '0.4s' : 0};
	animation-delay: ${props => props.delay ? props.delay+'s' : 0};
`;

const Icon = styled(Grid)`
    color: ${props => props.theme.colors.secondary};
    font-size: 1rem;
`;

