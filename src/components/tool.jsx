import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

const Tool = ({ tool, size, legend, width, delay }) => {
    return (
        <ToolContainer
        item xs={4}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={delay ? "animated fadeInLeft" : ""}
        delay={delay}
        >
            <Grid item xs={12} >
                <img
                    src={`./img/logos/${tool.image}`}
                    alt={tool.title}
                    style={{
                        height: size,
                        width: 'auto'
                    }}
                />
            </Grid>
        {legend ? <Text item xs={12} >{tool.title}</Text> : null}
        </ToolContainer>
    )
};

export default Tool;

/* Style */
const ToolContainer = styled(Grid)`
    margin-bottom: 10px !important;
    min-width: 60px !important;
    animation-duration: ${props => props.delay ? '0.2s' : 0};
	animation-delay: ${props => props.delay ? props.delay+'s' : 0};
`;

const Text = styled(Grid)`
    color: ${props => props.theme.colors.secondary};
    margin-top: 2px !important;
    font-size: 0.8rem;
`;
