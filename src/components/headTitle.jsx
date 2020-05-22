import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import NeoBlock from './neoBlock';

function HeadTitle() {
    return (
        <Container
            item
            xs={12} lg={10} xl={8}
            className="animated fadeInLeft"
        >
            {/* TITLE */}
            <NeoBlock type="out" action={null}>
                <Title>SoapAndSoft.dev</Title>
            </NeoBlock>
        </Container>
    );
}

export default HeadTitle;

/* Style */
const Container = styled(Grid)`
    animation-duration: 0.5s;
`;

const Title = styled.p`
    color: ${props => props.theme.colors.secondary};
    text-shadow: 1px 1px 1px ${props => props.theme.colors.title};
    font-size: 5vw;
    margin: 10px !important;

    @media(max-width: 650px) {
        font-size: 8vw;
    }

    @media(max-width: 750px) {
    font-size: 7vw;
    }
`;
