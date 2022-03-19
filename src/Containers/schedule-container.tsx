import * as React from 'react';
import styled from '@emotion/styled';
import Schedule from '../Content/Images/SectionHeaders/schedule_header.svg';
import SampleBorder from '../Content/Images/SampleBorder.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const TitleImage = styled.img`
	height: 150px;
`;

const SampleBorderStyle = styled.img`
	height: 100px;
	width: 50%;
	margin-top: 100px;
`;

const CeremonyDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `80px 0` : '160px 0')};
`;

const Title = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? `42px` : '70px')};
	margin-top: 40px;
	padding: ${(props: Props): string => (props.isMobile ? `15px 0` : '30px 0')};
	font-family: 'Pinyon Script', cursive;
`;

const Details = styled('div')`
	font-size: 24px;
	margin: 20px;
	width: ${(props: Props): string => (props.isMobile ? '85%' : '70%')};
	margin: auto;
`;

const DetailsTitle = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? '25px' : '40px')};
	font-family: 'Cormorant Garamond', serif;
`;

const AtText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 0;
	line-height: ${(props: Props): string => (props.isMobile ? '15px' : '20px')};
`;
const DetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 0;
`;
const SubDetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 0;
`;

const DetailsContainer = styled('div')`
	display: flex;
`;

const LineDiv = styled('div')`
	border: solid 0.5px grey;
`;

const ImageHolder = styled('div')``;

const CircleImage = styled('img')`
	margin-top: 30px;
	border-radius: 50%;
	height: ${(props: Props): string => (props.isMobile ? '250px' : '500px')};
	width: ${(props: Props): string => (props.isMobile ? '250px' : '500px')};
`;
const FloralImage = styled('img')`
	height: ${(props: Props): string => (props.isMobile ? '279px' : '557px')};
	width: ${(props: Props): string => (props.isMobile ? '303px' : '601px')};
	position: absolute;
	margin-top: ${(props: Props): string => (props.isMobile ? '25px' : '19px')};
	margin-left: ${(props: Props): string => (props.isMobile ? '-283px' : '-565px')};
`;

export class CeremonyContainer extends React.PureComponent<Props> {
	openMaps = () => {
		window.open(
			'https://www.google.com/maps/dir/?api=1&destination=QVB&destination_place_id=ChIJ11lAdDEVsYkRUIzFDtlG9FU'
		);
	};
	render() {
		return (
			<CeremonyDetails className={this.props.className} id={this.props.id}>
				{/* <ImageHolder>
					<CircleImage src={require('../Content/Images/circle_1.jpg')} {...this.props}></CircleImage>
					<FloralImage src={require('../Content/Images/florals-6.png')} {...this.props}></FloralImage>
				</ImageHolder> */}

				<TitleImage src={Schedule} alt="Schedule" />
				<DetailsContainer>
					<Details {...this.props}>
						<i className="material-icons" style={{ marginTop: '10px', fontSize: '35px' }}>
							schedule
						</i>
						<DetailsTitle {...this.props}>Ceremony</DetailsTitle>
						<DetailsText {...this.props}>September 10, 2022</DetailsText>
						<DetailsText {...this.props}>2:00 pm</DetailsText>
					</Details>
					<LineDiv />
					<Details>
						<i
							className="material-icons"
							style={{ marginTop: '25px', fontSize: '35px' }}
							onClick={this.openMaps}
						>
							place
						</i>
						<DetailsTitle {...this.props}>Cathedral of the Sacred Heart</DetailsTitle>
						<SubDetailsText {...this.props}>823 Cathedral Place</SubDetailsText>
						<SubDetailsText {...this.props}>Richmond, Virginia</SubDetailsText>
					</Details>
				</DetailsContainer>
				{/* <SampleBorderStyle src={SampleBorder} alt="Schedule" /> */}
			</CeremonyDetails>
		);
	}
}

// Green color to use....
// #6f9667

export default CeremonyContainer;
