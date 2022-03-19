import React from 'react';
import styled from '@emotion/styled';
import MenuHeader from './menu-header';
import NameHeader from '../../Content/Images/Name_Title.svg';

const Name = styled.div`
	font-family: 'Pinyon Script', cursive;
	font-size: 5rem;
	letter-spacing: -0.015em;
	margin-top: 1rem;
	text-align: center;
	margin-left: 30px;
`;

const TitleImage = styled.img`
	height: 150px;
`;

const DateStyle = styled.div`
	font-size: 2rem;
	letter-spacing: -0.015em;
	margin-top: 1rem;
	margin-bottom: 2rem;
	text-align: center;
`;
type ElegantHeaderProps = {
	visibleSection: string;
	scrollToHome?: any;
};

const ElegantHeader: React.FC<ElegantHeaderProps> = ({ visibleSection, scrollToHome }: ElegantHeaderProps) => {
	return (
		<div>
			<TitleImage src={NameHeader} alt="Abby and Danny" />
			{/* <Name>Abby & Danny</Name> */}
			<DateStyle>September 10, 2022</DateStyle>
			<MenuHeader visibleSection={visibleSection} scrollToHome={scrollToHome}></MenuHeader>
		</div>
	);
};

export default ElegantHeader;
