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
	padding: ${(props: Props): string => (props.isMobile ? `30px 0` : '40px 0')};
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
	font-size: 2.5vh;
	margin: 0;
	padding-bottom: 20px;
	width: 85%;
	margin-right: auto;
	margin-left: auto;
`;

export class AccomodationsContainer extends React.PureComponent<Props> {
	render() {
		return (
			<GettingThereDetails className={this.props.className} id={this.props.id}>
				<Title>Accomodations</Title>
				Reference FILLER when booking a room for the block rate.
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
					<OptionDetails>something blah</OptionDetails>
				</OptionStyle>
			</GettingThereDetails>
		);
	}
}

export default AccomodationsContainer;

// 1. Fix size of "Schedule" header
// Get blurb from abby
// Add something about the reception?  Need info about this...
// Need info if she is going to put something about hotel blocks on this...
// Replace hearts -> with watercolor icons
// ipad -> new title for FAQ and Accomodations

// Need  to get hotel block info from Mommy.  Jefferson, Graduate

// FAQ = details;
