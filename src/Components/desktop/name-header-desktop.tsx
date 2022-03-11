import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const NameContent = styled('div')`
	font-size: 24px;
	margin-bottom: 40px;
`;

const MainTitle = styled('img')`
	margin-top: 30px;
	height: 175px;
`;

const DateText = styled('div')`
	font-size: 46px;
	margin-top: -12px;
	color: #081090;
`;

export class NameHeader extends React.PureComponent<Props> {
	render() {
		return (
			<NameContent className={this.props.className} id={this.props.id}>
				<MainTitle src={require('../../Content/Images/name_header_desktop.png')} {...this.props}></MainTitle>
				<DateText>September 10, 2022</DateText>
			</NameContent>
		);
	}
}

export default NameHeader;
