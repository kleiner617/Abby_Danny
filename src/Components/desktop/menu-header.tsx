import React from 'react';
import styled from '@emotion/styled';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

type Props = {
	visibleSection: string;
	scrollToHome?: any;
};

const HeaderStyle = styled('div')`
	display: flex;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 5vh;
`;

const TopHeader = styled('div')`
	font-size: 16px;
	font-weight: 300;
	display: flex;
	margin: auto;
`;
const TopHeaderButton = styled('div')`
	color: black;
	padding: 0 40px;
	cursor: pointer;
	margin: auto;
	:hover {
		color: #081090;
	}
`;

const LineDec = styled('div')`
	padding-left: 4vw;
	border: solid 0.5px grey;
	margin: auto;
	height: 0px;
	width: 10%;
`;

const Filler = styled('div')`
	width: 7%;
`;

const StyledLink = styled(Link)`
	margin: auto;
`;

const MenuHeader = (props: Props) => {
	return (
		<HeaderStyle>
			<Filler />
			<LineDec />
			<TopHeader>
				<StyledLink to="/#home" smooth>
					<TopHeaderButton className="top-button">HOME</TopHeaderButton>{' '}
				</StyledLink>
				<StyledLink to="/#schedule" smooth>
					<TopHeaderButton className="top-button">SCHEDULE</TopHeaderButton>
				</StyledLink>
				<StyledLink to="/#travel" smooth>
					<TopHeaderButton className="top-button">TRAVEL</TopHeaderButton>
				</StyledLink>

				<StyledLink to="/#thingsToDo" smooth>
					<TopHeaderButton className="top-button">THINGS TO DO</TopHeaderButton>{' '}
				</StyledLink>

				<StyledLink to="/#faq" smooth>
					<TopHeaderButton className="top-button">FAQ</TopHeaderButton>{' '}
				</StyledLink>

				<StyledLink to="/#registry" smooth>
					<TopHeaderButton className="top-button">REGISTRY</TopHeaderButton>{' '}
				</StyledLink>
			</TopHeader>
			<LineDec />
			<Filler />
		</HeaderStyle>
	);
};
export default MenuHeader;
