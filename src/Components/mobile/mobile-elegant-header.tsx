import React from 'react';
import styled from '@emotion/styled';

const Name = styled.div`
	font-family: 'Pinyon Script', cursive;
	font-size: 3rem;
	letter-spacing: -0.015em;
	text-align: center;
	margin-top: 6vh;
`;

const DateStyle = styled.div`
	font-size: 1.5rem;
	letter-spacing: -0.015em;
	margin-top: 0rem;
	margin-bottom: 2rem;
	text-align: center;
`;
type ElegantHeaderProps = {};

const ElegantHeader: React.FC<ElegantHeaderProps> = () => {
	return (
		<div>
			<Name>Abby & Danny</Name>
			<DateStyle>September 10, 2022</DateStyle>
		</div>
	);
};

export default ElegantHeader;
