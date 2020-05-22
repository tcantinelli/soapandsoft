import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

function ProjectLine({ icon, type, data, delay }) {

    //Rendu du texte en fonction du type
    const gimmeTheText = (type, item) => {
        switch (type) {
            case 'text':
                return item;
            case 'link':
                return (
                    <Link
                    target="_blank"
                    href={item}
                    rel='noreferrer noopener'
                    >
                    {item}
                    </Link>
                );
            case 'tag':
                let theText = "";
                item.forEach(hashtag => {
                    theText += `#${hashtag}  `;
                })
                return <p>{theText}</p>;
            default:
                break;
        }
    }

    return (
        <LineContainer
            item
            container
            xs={type === 'link' ? 11 : 12}
            direction="row"
            justify="space-around"
            alignItems="center"
            className="animated fadeInDown"
            delay={delay}
        >
            {/* ICON */}
            <Icon item xs={1} >
                <span>
                {icon}
                </span>
            </Icon>

            {/* TEXT */}
            <Text item xs={11} zeroMinWidth={type !== 'tag' ? true : false} type={type}>
                {gimmeTheText(type, data)}
            </Text>
        </LineContainer>
    );
}

export default ProjectLine;

/* Style */
const LineContainer = styled(Grid)`
    overflow-wrap: break-word;
    animation-duration: 0.2s;
	animation-delay: ${props => props.delay}s;
`;


const Icon = styled(Grid)`
    color: ${props => props.theme.colors.secondary};
    font-size: 0.8rem;
`;

const Link = styled.a`
    color: ${props => props.theme.colors.secondary};
    text-align: justify;
    font-size: 1rem;
    text-decoration: none;

`;

const Text = styled(Grid)`
    color: ${props => props.theme.colors.secondary};
    text-align: ${props => props.type === 'tag' ? 'left' : 'justify'};
    font-size: 1rem;
    padding-left: 10px;
`;
