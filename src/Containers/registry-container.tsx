import * as React from 'react';
import styled from '@emotion/styled';
import Registry from '../Content/Images/SectionHeaders/registry_header.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const RegistryDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `80px 0` : '160px 0')};
`;

const TitleImage = styled.img`
	height: 150px;
	margin-bottom: 20px;
`;

const Title = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? `42px` : '70px')};
	margin-top: 40px;
	padding: ${(props: Props): string => (props.isMobile ? `15px 0` : '30px 0')};
	font-family: 'Pinyon Script', cursive;
`;

const Details = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '32px')};
	width: ${(props: Props): string => (props.isMobile ? '89vw' : '53vw')};
	text-align: center;
	margin: auto;
`;

const StandAloneZola = styled('img')`
	margin: 30px;
	width: ${(props: Props): string => (props.isMobile ? '200px' : '400px')};
	cursor: pointer;
`;
export class RegistryContainer extends React.PureComponent<Props> {
	onClickRegistryItem = (registry: string) => {
		switch (registry) {
			case 'zola':
				window.open('https://www.zola.com/registry/heatherandemily');
				break;
			default:
				break;
		}
	};
	render() {
		return (
			<RegistryDetails className={this.props.className} id={this.props.id}>
				<div>
					<TitleImage src={Registry} alt="Registry" />
				</div>
				<div>
					<StandAloneZola
						src={require('../Content/Images/logos/Zola-Logo.png')}
						onClick={() => {
							this.onClickRegistryItem('zola');
						}}
						{...this.props}
					/>
				</div>
			</RegistryDetails>
		);
	}
}

export default RegistryContainer;
