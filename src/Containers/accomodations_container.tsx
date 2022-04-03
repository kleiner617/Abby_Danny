import * as React from 'react';
import styled from '@emotion/styled';
import AccomdationsTitle from '../Content/Images/SectionHeaders/Accomodations.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const TitleImage = styled.img`
	height: ${(props: Props): string => (props.isMobile ? `12vh` : '150px')};
`;

const GettingThereDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `30px 0` : '40px 0')};
`;

const OptionStyle = styled('p')`
	font-size: 24px;
	margin: 0;
	padding-bottom: 20px;
`;

const OptionTitle = styled('div')`
	font-size: 3.5vh;
	margin: auto;
	font-weight: bold;
	padding-bottom: 10px;
	width: 80%;

	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
		color: #0072bb;
	}
	a:active {
		text-decoration: none;
		color: #0072bb;
	}
`;

const OptionAddress = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? '24px' : '20px')};
	margin-bottom: 20px;
	a:link {
		text-decoration: none;
		color: black;
	}
	a:visited {
		text-decoration: none;
		color: black;
	}
	a:hover {
		text-decoration: none;
		color: #0072bb;
	}
	a:active {
		text-decoration: none;
		color: #0072bb;
	}
`;

const AddressText = styled('div')``;

const OptionDetails = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? `20px` : '2.5vh')};
	margin: 0;
	padding-bottom: 30px;
	width: ${(props: Props): string => (props.isMobile ? `90%` : '50%')};
	margin-right: auto;
	margin-left: auto;
`;

export class AccomodationsContainer extends React.PureComponent<Props> {
	render() {
		return (
			<GettingThereDetails className={this.props.className} id={this.props.id}>
				<TitleImage src={AccomdationsTitle} alt="Accomdations" {...this.props} />
				<OptionDetails {...this.props}>
					For your convenience, a block of rooms has been reserved at two hotels in downtown Richmond. When
					calling to make your reservation, please mention the Klein Traeger wedding in order to receive a
					discounted rate.
				</OptionDetails>
				<OptionStyle>
					<OptionTitle>
						<a href={'https://www.jeffersonhotel.com/'} target="_blank" rel="noopener noreferrer">
							The Jefferson Hotel
						</a>
					</OptionTitle>
					<OptionAddress>
						<a href="https://goo.gl/maps/xcJTeDUUZLaFCwsQ7" target="_blank" rel="noopener noreferrer">
							<AddressText>101 West Franklin Street</AddressText>
							<AddressText>Richmond, VA 23220 </AddressText>
						</a>
					</OptionAddress>
				</OptionStyle>
				<OptionStyle>
					<OptionTitle>
						<a href={'https://www.graduatehotels.com/richmond/'} target="_blank" rel="noopener noreferrer">
							The Graduate Hotel
						</a>
					</OptionTitle>
					<OptionAddress>
						<a href="https://goo.gl/maps/iSTCSpFFWKjAUkwG6" target="_blank" rel="noopener noreferrer">
							<AddressText>301 W Franklin Street</AddressText>
							<AddressText>Richmond, VA 23220 </AddressText>
						</a>
					</OptionAddress>
				</OptionStyle>
			</GettingThereDetails>
		);
	}
}

export default AccomodationsContainer;
