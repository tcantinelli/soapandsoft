import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Portal from './portal';

function ProjectVideo({ title }) {

    const [playVideo, setPlayVideo] = useState(false);

    const previewRef = useRef(null);
    const videoRef = useRef(null);

    // Start preview on loading
    useEffect(() => {
        previewRef.current.setAttribute("playsinline", "");
        previewRef.current.setAttribute("muted", "");
        previewRef.current.play();
	}, []);

    // Start/stop video
    useEffect(() => {
        if(playVideo) {
            videoRef.current.setAttribute("muted", "");
            previewRef.current.pause();
            videoRef.current.play();
        }
	}, [playVideo]);

    return (
        <>
            {/* Preview */}
            <Container className="centerAll">
                <VideoPreview autoplay muted loop playsInline ref={previewRef} >
                    <source src={`https://portfolio.soapandsoft.dev/preview/${title}.webm`} type="video/webm" />
                    <source src={`https://portfolio.soapandsoft.dev/preview/${title}.mp4`} type="video/mp4" />
                </VideoPreview>
                <Content className="centerAll" onClick={() => setPlayVideo(true)}>
                    <h1>Zoom</h1>
                </Content>
            </Container>
            {/* Video */}
            {playVideo ?
            <Portal>
                <VideoFull className="centerAll">
                    <ClickAwayListener onClickAway={() => setPlayVideo(false)}>
                        <video muted loop ref={videoRef} controls >
                            <source src={`https://portfolio.soapandsoft.dev/video/${title}.mp4`} type="video/mp4" />
                        </video>
                    </ClickAwayListener>
                </VideoFull>
            </Portal>
            : null}
        </>
    );
}

export default ProjectVideo;

/* Style */
const Container = styled.div`
    width: 96%;
    height: 96%;
    position: relative;
`;

const VideoPreview = styled.video`
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 5px;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.3);
    color: #f1f1f1;
    padding: 15px;
    height: 40px;
    border-radius: 20px;
    font-size: 12px;
    cursor: pointer;
`;

const VideoFull = styled.div`
    overflow: hidden;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.6);
    min-width: 100% !important;
    min-height: 100% !important;

    video {
        width: 75vw;
        height: auto;
    }
`;
