import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Slider from './slider';

function ProjectImages({ images, type }) {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState(0);
    const [imgSet, setImgSet] = useState([]);

	//Set of images
	useEffect(() => {
        let newArr = [];
		images.forEach(image => {
            newArr.push({
                src: `./img/projects/${image}`
            })
        });
        setImgSet(newArr);
	}, [images]);

    const handleClickOpen = (index) => {
        setPosition(index);
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Grid
                item xs={11}
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="fullSize"
            >
                {images.map((image, index) => {
                    return (
                        <ThumbContainer
                            item
                            xs={type === 'Application mobile' ? 4 : 12}
                            key={`thumb${index}`}
                            percent={100 / images.length}
                            type={type}
                            className="animated zoomIn"
                            delay={0.1 * index + 0.1}
                        >
                            <ImgThumb
                                src={`./img/projects/${image}`}
                                alt={image}
                                onClick={() => handleClickOpen(index)}
                                type={type}
                                />
                        </ThumbContainer>
                    )
                })}
            </Grid >
            <Slider open={visible} onClose={handleClose} imgSet={imgSet} position={position} setPosition={setPosition} />
        </>
    );
}

export default ProjectImages;

/* Style */
const ThumbContainer = styled(Grid)`
    height: ${props => props.type === 'Application mobile' ? 'auto' : props.percent+'%'} !important;
    width: ${props => props.type === 'Application mobile' ? '90%' : 'auto'} !important;
    padding: 20px;
    animation-duration: 0.2s;
    animation-delay: ${props => props.delay}s;
`;

const ImgThumb = styled.img`
    max-width: 100% !important;
    height: ${props => props.type === 'Application mobile' ? 'auto' : '90%'} !important;
    cursor: pointer;
    border-radius: 5px;
`;
