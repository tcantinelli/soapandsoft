import React from 'react';
import styled from "styled-components";
import { Grid, Switch, withStyles } from '@material-ui/core';
import NeoBlock from './neoBlock';
import { isMobile } from 'react-device-detect';

function HeadThemeSwitch({dark, handleChecked, width}) {
    return (
		<Container
			item
			xs={isMobile ? 8 : 6} md={4}
		>
			<NeoBlock type="out" action={null}>
				<Grid component="label" container alignItems="center" justify="center" spacing={ 1 }>
					<ThemeTitle item>{width > 450 ? 'White Walkers' : 'Light'}</ThemeTitle>
					<Grid item>
						<TheSwitch
							checked={ dark }
							onChange={ handleChecked }
							name="checkedTheme"
						/>
					</Grid>
					<ThemeTitle item>{width > 450 ? 'Night Watch' : 'Dark'}</ThemeTitle>
				</Grid>
			</NeoBlock>
		</Container>
    );
}

export default HeadThemeSwitch;

/* Style */
const Container = styled(Grid)`
	height: 65px !important;
`;

const TheSwitch = withStyles({
  switchBase: {
    color: "#444444",
    '&$checked': {
      color: "#E0E5EC",
    },
    '&$checked + $track': {
      backgroundColor: "#E0E5EC",
    },
  },
  checked: {},
  track: {},
})(Switch);

const ThemeTitle = styled(Grid)`
	color: ${props => props.theme.colors.secondary};
	font-size: 1.2rem;
	font-weight: bold;

	@media(min-width: 450px) {
		font-size: 1rem;
	}
`;
