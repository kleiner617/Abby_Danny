import * as React from 'react';
import styled from '@emotion/styled';
import Schedule from '../Content/Images/SectionHeaders/schedule_header.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const TitleImage = styled.img`
	height: 150px;
	margin-bottom: 20px;
`;

const RingSample = styled.img`
	height: 150px;
	margin-bottom: 20px;
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

const DetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 0;
`;
const SubDetailsText = styled('p')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 0;
`;

const ScheduleAddress = styled('div')`
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

const DetailsContainer = styled('div')`
	display: flex;
`;

const LineDiv = styled('div')`
	border: solid 0.5px grey;
`;
export class CeremonyContainer extends React.PureComponent<Props> {
	openMaps = () => {
		window.open('https://goo.gl/maps/wqdkTugYKiw9qZC19');
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
						<RingSample src={require('../Content/Images/ring.png')} alt="Schedule" />
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

						<ScheduleAddress>
							<a href="https://goo.gl/maps/wqdkTugYKiw9qZC19" target="_blank" rel="noopener noreferrer">
								<SubDetailsText {...this.props}>823 Cathedral Place</SubDetailsText>
								<SubDetailsText {...this.props}>Richmond, Virginia</SubDetailsText>
							</a>
						</ScheduleAddress>
					</Details>
				</DetailsContainer>
			</CeremonyDetails>
		);
	}
}

// Green color to use....
// #6f9667

export default CeremonyContainer;
