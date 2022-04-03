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
	margin-top: 40px;
	margin-bottom: 30vh;
`;

const RegistryBlock = styled('div')`
	width: ${(props: Props): string => (props.isMobile ? `90%` : '50%')};
	margin: auto;
	font-size: ${(props: Props): string => (props.isMobile ? `18px` : '24px')};
`;

const TitleImage = styled.img`
	height: ${(props: Props): string => (props.isMobile ? `12vh` : '150px')};
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
				<RegistryBlock {...this.props}>
					What we want most for our wedding is to have all of our friends and family there to celebrate the
					occasion with us, and so, more than anything we would simply enjoy your presence. (We mean it!) That
					said, we also enjoy dishware and shiny new four-slice toasters too, so if you really would like to
					get us something, you can find some suggestions here:
				</RegistryBlock>
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
