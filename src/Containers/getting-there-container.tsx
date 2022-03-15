import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const GettingThereDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `30px 0` : '60px 0')};
	background: #f0f3ed;
`;

const Title = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? `42px` : '70px')};
	margin-top: 40px;
	padding: ${(props: Props): string => (props.isMobile ? `15px 0` : '30px 0')};
	font-family: 'Pinyon Script', cursive;
`;
const Details = styled('div')`
	font-size: 24px;
	width: ${(props: Props): string => (props.isMobile ? '85%' : '70%')};
	margin: auto;
`;

const CircleImage = styled('img')`
	margin-top: 30px;
	border-radius: 50%;
	height: ${(props: Props): string => (props.isMobile ? `250px` : '500px')};
	width: ${(props: Props): string => (props.isMobile ? `250px` : '500px')};
`;
const FloralImage = styled('img')`
	height: ${(props: Props): string => (props.isMobile ? '279px' : '557px')};
	width: ${(props: Props): string => (props.isMobile ? '303px' : '601px')};
	position: absolute;
	margin-top: ${(props: Props): string => (props.isMobile ? '25px' : '19px')};
	margin-left: ${(props: Props): string => (props.isMobile ? '-283px' : '-565px')};
`;
const DetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '24px' : '36px')};
	margin: 0;
	padding-bottom: 20px;
`;
const SubDetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 0;
`;

export class GettingThereContainer extends React.PureComponent<Props> {
	render() {
		return (
			<GettingThereDetails className={this.props.className} id={this.props.id}>
				<Title {...this.props}>Travel</Title>
				{/* <Details>
					<DetailsText {...this.props}>
						<a href="https://www.lunchorsupper.com/urbanroostbeergarden">Urban Roost</a>
						<span>
							{' '}
							is located in the Scott's Addition neighborhood of RVA. Free Valet parking will be availble
							at the Marshall street entrance.
						</span>
						<SubDetailsText {...this.props}>* Tips have been paid in advance</SubDetailsText>
					</DetailsText>
				</Details> */}
			</GettingThereDetails>
		);
	}
}

export default GettingThereContainer;
