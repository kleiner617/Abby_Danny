import * as React from 'react';
import styled from '@emotion/styled';
import Travel from '../Content/Images/SectionHeaders/travel_header.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const TitleImage = styled.img`
	height: 150px;
`;

const GettingThereDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `80px 0` : '160px 0')};
	// background-color: rgb(0, 114, 187, 0.2);
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

const DetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '24px' : '36px')};
	margin: 0;
	padding-bottom: 20px;
`;
const SubDetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 0;
`;

export class AccomodationsContainer extends React.PureComponent<Props> {
	render() {
		return (
			<GettingThereDetails className={this.props.className} id={this.props.id}>
				<TitleImage src={Travel} alt="Travel" />
				<Details>
					Flights
					<DetailsText {...this.props}>
						Richmond Airport
						<SubDetailsText {...this.props}>Airport details...</SubDetailsText>
					</DetailsText>
				</Details>

				<Details>
					Jefferson Hotel
					<DetailsText {...this.props}>
						Richmond Airport
						<SubDetailsText {...this.props}>Airport details...</SubDetailsText>
					</DetailsText>
				</Details>
			</GettingThereDetails>
		);
	}
}

export default AccomodationsContainer;
