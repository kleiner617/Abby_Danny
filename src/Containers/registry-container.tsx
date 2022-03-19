import * as React from 'react';
import styled from '@emotion/styled';
import Registry from '../Content/Images/SectionHeaders/registry_header.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const RegistryDetails = styled('div')`
margin-top:
	padding: ${(props: Props): string => (props.isMobile ? `80px 0` : '160px 0')};
`;

const TitleImage = styled.img`
	height: 150px;
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

const LogoContainer = styled('div')``;

const LogoImage = styled('img')`
	margin: ${(props: Props): string => (props.isMobile ? '5px 22px' : '16px 43px')};
	width: ${(props: Props): string => (props.isMobile ? '100px' : '175px')};
	display: inline-block;
	cursor: pointer;
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
			case 'crateAndBarrel':
				window.open('https://www.crateandbarrel.com/gift-registry/emily-klein-and-heather-priestley/r6083213');
				break;
			case 'williamsSonoma':
				window.open('https://www.williams-sonoma.com/registry/qg5fslvtz8/registry-list.html');
				break;
			case 'surLaTable':
				window.open(
					'https://www.surlatable.com/on/demandware.store/Sites-SLT-Site/default/GiftRegistryCustomer-Show?ID=274e3f67afe30af6a000b59e77'
				);
				break;
			default:
				break;
		}
	};
	render() {
		return (
			<RegistryDetails className={this.props.className} id={this.props.id}>
				<TitleImage src={Registry} alt="Registry" />
				<StandAloneZola
					src={require('../Content/Images/logos/Zola-Logo.png')}
					onClick={() => {
						this.onClickRegistryItem('zola');
					}}
					{...this.props}
				></StandAloneZola>
			</RegistryDetails>
		);
	}
}

export default RegistryContainer;
