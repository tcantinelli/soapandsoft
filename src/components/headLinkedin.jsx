import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import NeoBlock from './neoBlock';

function HeadLinkedin() {
    return (
        <Container
            item
            xs={2} sm={2} md={1}
        >
            <NeoBlock type="out" action={null}>
            <SVGLink
                className="centerAll"
                target="_blank"
                href="https://www.linkedin.com/in/thomas-cantinelli/"
                rel='noreferrer noopener'
            >
                <Linkedin
                    xmlns="http://www.w3.org/2000/svg"
                    width="80%"
                    height="80%"
                    viewBox="0 0 512 512"
                >
                    <LinkPath d="m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"/>
                </Linkedin>
                </SVGLink>
            </NeoBlock>
        </Container>
    );
}

export default HeadLinkedin;

/* Style */
const Container = styled(Grid)`
    height: 65px !important;
`;

const Linkedin = styled.svg`
    fill: ${props => props.theme.colors.secondary};
    @media(max-width: 500px) {
        width: 90%;
        height: 90%;
    }
`;

const LinkPath = styled.path`
    stroke: ${props => props.theme.colors.secondary};
`;

const SVGLink = styled.a`
    height: 100%;
    width: 100%;
    padding: 10px;
`;