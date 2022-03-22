import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const FooterText = styled('div')`
	background: white;
	padding: 10px;
	padding-bottom: ${(props: Props): string => (props.isMobile ? '15px' : '25px')};
`;
const WebsiteText = styled('div')`
	width: 100%;
	font-size: ${(props: Props): string => (props.isMobile ? '18px' : '22px')};
`;
const PhotographyText = styled('div')`
	width: 100%;
	padding: 5px;
	font-size: ${(props: Props): string => (props.isMobile ? '12px' : '16x')};
`;

export class Footer extends React.PureComponent<Props> {
	render() {
		return (
			<FooterText id={this.props.id}>
				<WebsiteText {...this.props}>
					<i className="material-icons" style={{ marginTop: '10px', fontSize: '18px', padding: '2px' }}>
						copyright
					</i>
					ERK 2022
				</WebsiteText>
				<PhotographyText {...this.props}>
					All photography provided by
					<a href="https://brettdenfeldphotography.com/"> Brett Denfeld</a>
				</PhotographyText>
			</FooterText>
		);
	}
}

export default Footer;
