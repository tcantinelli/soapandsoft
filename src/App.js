import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useWindowSize from './tools/dimensions';
import { isMobile } from 'react-device-detect';

import Grid from '@material-ui/core/Grid';

import styled, { ThemeProvider } from "styled-components";

import darkTheme from "./themes/dark";
import lightTheme from "./themes/light";

import HeadTitle from './components/headTitle';
import HeadLinkedin from './components/headLinkedin';
import HeadGitHub from './components/headGitHub';
import HeadStars from './components/headStars';
import HeadThemeSwitch from './components/headThemeSwitch';
import Project from './components/project';

import './App.css';


function App() {

	const [ projects, setProjects ] = useState([]);
	const [ dark, setDarkness ] = useState(false);

	// Change theme
	const handleChecked = () => {
		setDarkness(prev => !prev);
	};

	//Fetch datas
	useEffect(() => {
		axios.get('https://xxxxxxxxxxxxxxxxxxxxxxx')
			.then((response) => {
				const dataList = [];

				response.data.forEach(item => {
					dataList.push({
						...item,
						state: {
							info: false,
							images: item.images.length > 0 ? false : null,
							video: item.video ? false : null,
							links: item.link || item.git ? false : null,
							cancel: true
						}
					});
				});
				setProjects(dataList);
			})
			.catch(error => {
				console.error(error.message);
			});
	}, []);

	//Get windows size
	const size = useWindowSize();

	return (
		<ThemeProvider theme={ dark ? darkTheme : lightTheme }>
			{ projects.length > 0 ?
			<Wrapper>
				{/* HEADER */ }
				<Header>
					<Grid container direction="row" justify="center" alignItems="center" >
						<HeadTitle />
					</Grid>
					<OptionsContainer container direction="row" justify="center" alignItems="center" spacing={2} className="animated fadeInRight">
						<HeadLinkedin />
						<HeadGitHub />
						{!isMobile ? <HeadStars />: null}
						<HeadThemeSwitch dark={dark} handleChecked={handleChecked} width={size.width} />
					</OptionsContainer>
				</Header>
				{/* PROJECTS */ }
					<ProjectContainer
						container
						direction="row"
						justify="space-evenly"
						alignItems="center"
						className="fullSize"
					>
					{projects.map((project, i) => {
						return (
							<Project project={ project } delay={0.1 * i + 0.3} key={ project._id } />
						)
					})}
				</ProjectContainer>
			</Wrapper>
				: null }
		</ThemeProvider>
	);
}

export default App;

const Wrapper = styled.div`
	text-align: center;
	background: ${props => props.theme.colors.primary};
`;

const ProjectContainer = styled(Grid)`
	background: ${props => props.theme.colors.primary};
`;

const Header = styled(Grid)`
	text-align: center;
	background: ${props => props.theme.colors.primary};
	padding: 15px !important;
`;

const OptionsContainer = styled(Grid)`
	padding: 20px 0px !important;
	animation-duration: 0.5s;
`;
