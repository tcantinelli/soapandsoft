import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import NeoBlock from './neoBlock';

function HeadStars() {
    return (
        <Container
            item
            xs={2} sm={2} md={1}
        >
            <NeoBlock type="out" action={null}>
                <SVGLink
                    className="centerAll"
                    target="_blank"
                    href="https://stars.soapandsoft.com"
                    rel='noreferrer noopener'
                >
                    <StarInvadersWars
                        xmlns="http://www.w3.org/2000/svg"
                        width="80%"
                        height="80%"
                        viewBox="0 0 462 336"
                    >
                        <StarsRect x="84" width="42" height="42" />
                        <StarsRect x="126" y="42" width="42" height="42" />
                        <StarsRect x="84" y="84" width="42" height="42" />
                        <StarsRect x="42" y="126" width="42" height="42" />
                        <StarsRect y="84" width="42" height="42" />
                        <StarsRect y="42" width="42" height="42" />
                        <StarsRect y="126" width="42" height="42" />
                        <StarsRect x="42" y="168" width="42" height="42" />
                        <StarsRect y="168" width="42" height="42" />
                        <StarsRect x="42" y="210" width="42" height="42" />
                        <StarsRect x="84" y="126" width="42" height="42" />
                        <StarsRect x="84" y="168" width="42" height="42" />
                        <StarsRect x="84" y="210" width="42" height="42" />
                        <StarsRect x="84" y="252" width="42" height="42" />
                        <StarsRect x="42" y="294" width="42" height="42" />
                        <StarsRect x="126" y="84" width="42" height="42" />
                        <StarsRect x="168" y="84" width="42" height="42" />
                        <StarsRect x="210" y="84" width="42" height="42" />
                        <StarsRect x="252" y="84" width="42" height="42" />
                        <StarsRect x="294" y="42" width="42" height="42" />
                        <StarsRect x="336" width="42" height="42" />
                        <StarsRect x="294" y="84" width="42" height="42" />
                        <StarsRect x="336" y="84" width="42" height="42" />
                        <StarsRect x="420" y="84" width="42" height="42" />
                        <StarsRect x="420" y="42" width="42" height="42" />
                        <StarsRect x="420" y="126" width="42" height="42" />
                        <StarsRect x="420" y="168" width="42" height="42" />
                        <StarsRect x="336" y="126" width="42" height="42" />
                        <StarsRect x="336" y="168" width="42" height="42" />
                        <StarsRect x="336" y="210" width="42" height="42" />
                        <StarsRect x="378" y="126" width="42" height="42" />
                        <StarsRect x="378" y="168" width="42" height="42" />
                        <StarsRect x="378" y="210" width="42" height="42" />
                        <StarsRect x="336" y="252" width="42" height="42" />
                        <StarsRect x="378" y="294" width="42" height="42" />
                        <StarsRect x="126" y="210" width="42" height="42" />
                        <StarsRect x="168" y="210" width="42" height="42" />
                        <StarsRect x="210" y="210" width="42" height="42" />
                        <StarsRect x="252" y="210" width="42" height="42" />
                        <StarsRect x="294" y="210" width="42" height="42" />
                        <StarsRect x="126" y="168" width="42" height="42" />
                        <StarsRect x="168" y="168" width="42" height="42" />
                        <StarsRect x="210" y="168" width="42" height="42" />
                        <StarsRect x="252" y="168" width="42" height="42" />
                        <StarsRect x="294" y="168" width="42" height="42" />
                        <StarsRect x="168" y="126" width="42" height="42" />
                        <StarsRect x="210" y="126" width="42" height="42" />
                        <StarsRect x="252" y="126" width="42" height="42" />
                    </StarInvadersWars>
                </SVGLink>
            </NeoBlock>
        </Container>
    );
}

export default HeadStars;

/* Style */
const Container = styled(Grid)`
    height: 65px !important;
`;

const StarInvadersWars = styled.svg`
    @media(max-width: 500px) {
        width: 90%;
        height: 90%;
    }
`;

const StarsRect = styled.rect`
    fill: ${props => props.theme.colors.secondary};
`;

const SVGLink = styled.a`
    height: 100%;
    width: 100%;
    padding: 10px;
`;