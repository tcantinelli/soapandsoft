import React from 'react';
import styled from "styled-components";
import NeoBlock from './neoBlock';
import Grid from '@material-ui/core/Grid';

const Command = ({ state, type, action, children }) => {

    //Return action to Project
    const cmdAction = () => {
        action(type)
    }

    return (
        <MainContainer item xs>
            <NeoBlock type={state ? 'in' : 'out'} action={action ? cmdAction : null}>
                {children}
            </NeoBlock>
        </MainContainer>
    );
}

export default Command;

/* Style */
const MainContainer = styled(Grid)`
    min-height: 53px !important;
    height: 53px !important;
    width: 53px !important;
    margin: 0px 0px 15px 0px !important;
    color: ${props => props.theme.colors.secondary};
`;
