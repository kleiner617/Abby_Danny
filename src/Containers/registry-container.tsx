import * as React from 'react';
import styled from '@emotion/styled';
import Registry from '../Content/Images/SectionHeaders/registry_header.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const RegistryDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `30px 0` : '40px 0')};
`;

const TitleImage = styled.img`
	height: 150px;
	margin-bottom: 20px;
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
				https: window.open('https://www.zola.com/registry/dannyandabby2022');
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
