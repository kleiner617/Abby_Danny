import React from 'react';
import styled from '@emotion/styled';
import NameHeader from '../../Content/Images/Name_Title.svg';

const ElegantHeaderStyle = styled.div`
	margin-top: 30px;
`;

const DateStyle = styled.div`
	font-size: 1.5rem;
	letter-spacing: -0.015em;
	margin-top: 0rem;
	margin-bottom: 2rem;
	text-align: center;
`;

const TitleImage = styled.img`
	height: 100px;
	margin-top: 15px;
`;

const ElegantHeader: React.FC = () => {
	return (
		<ElegantHeaderStyle>
			<TitleImage src={NameHeader} alt="Abby and Danny" />
			<DateStyle>September 10, 2022</DateStyle>
		</ElegantHeaderStyle>
	);
};

export default ElegantHeader;
