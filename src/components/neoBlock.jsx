import React from 'react';
import styled from "styled-components";

const NeoBlock = ({ type, action, children }) => {
    return (
        <Container
            className="centerAll"
            onClick={action}
            type={type}
            click={action ? true : false}
        >
            {children}
        </Container>
    );
}

export default NeoBlock;

/* Style */
const Container = styled.div`
    border-radius: ${props => props.theme.neo.borderRadius};
    background: ${props => props.theme.colors.primary};
    min-width: 100% !important;
    min-height: 100% !important;
    height: 100% !important;
    width: 100% !important;
    cursor: ${props => props.click ? 'pointer' : 'auto'};
    box-shadow:  ${props => props.type === 'in' ? props.theme.neo.boxShadowIn : props.theme.neo.boxShadowOut};
`;
