import React from 'react';
import styled from '@emotion/styled';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

type Props = {
	visibleSection: string;
	scrollToHome?: any;
};

const TopHeader = styled('div')`
	position: absolute;
	margin-top: 10px;
	width: 100%;
	margin: auto;
	z-index: 9;
`;
const TopHeaderButton = styled('div')`
	display: inline-block;
	color: black;
	font-weight: bold;
	font-size: 24px;
	padding: 0 40px;
	cursor: pointer;
	:hover {
		color: #081090;
	}
`;

const HeartImg = styled('img')`
	height: 90px;
	width: 90px;
	margin-top: -10px;
`;

const MenuHeader = (props: Props) => {
	return (
		<div>
			<TopHeader>
				<Link to="/#schedule" smooth>
					<TopHeaderButton className="top-button">Schedule</TopHeaderButton>
				</Link>
				<Link to="/#travel" smooth>
					<TopHeaderButton className="top-button">Travel</TopHeaderButton>
				</Link>
				<Link to="/#accomodations" smooth>
					<TopHeaderButton className="top-button">Accomodations</TopHeaderButton>{' '}
				</Link>
				<Link to="/" smooth>
					<HeartImg
						src={require('../../Content/Images/A-D_navy.png')}
						onClick={props.scrollToHome}
					></HeartImg>
				</Link>

				<Link to="/#thingsToDo" smooth>
					<TopHeaderButton className="top-button">Things To Do</TopHeaderButton>{' '}
				</Link>

				<Link to="/#faq" smooth>
					<TopHeaderButton className="top-button">FAQ</TopHeaderButton>{' '}
				</Link>

				<Link to="/#registry" smooth>
					<TopHeaderButton className="top-button">Registry</TopHeaderButton>{' '}
				</Link>
			</TopHeader>
		</div>
	);
};
export default MenuHeader;
