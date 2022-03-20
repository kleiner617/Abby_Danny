import React from 'react';
import styled from '@emotion/styled';
import MenuHeader from './menu-header';
import NameHeader from '../../Content/Images/Name_Title.svg';

const ElegantHeaderStyle = styled.div`
	margin-top: 30px;
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
		<ElegantHeaderStyle>
			<TitleImage src={NameHeader} alt="Abby and Danny" />
			<DateStyle>September 10, 2022</DateStyle>
			<MenuHeader visibleSection={visibleSection} scrollToHome={scrollToHome}></MenuHeader>
		</ElegantHeaderStyle>
	);
};

export default ElegantHeader;
