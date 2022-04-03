import * as React from 'react';
import styled from '@emotion/styled';
import Schedule from '../../Content/Images/SectionHeaders/schedule_header.svg';
import LineDivider from '../../Content/Images/lines.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const TitleImage = styled.img`
	height: ${(props: Props): string => (props.isMobile ? `12vh` : '150px')};
	margin-bottom: 20px;
`;

const WatercolorStyle = styled.img`
	height: 150px;
	margin-bottom: 10px;
`;

const CeremonyDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `30px 0` : '40px 0')};
`;

const FancyLine = styled.img`
	margin-top: 30px;
	margin-bottom: 30px;
	height: ${(props: Props): string => (props.isMobile ? `40px` : '70px')};
`;

const Details = styled('div')`
	font-size: 24px;
	margin: 20px;
    width: 100%;
	margin: auto;
}`;

const DetailsTitle = styled('div')`
	font-size: 30px;
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

const Spacer = styled('div')`
	height: 20px;
`;

const LineDiv = styled('div')`
	height: 30px;
`;
class CeremonyContainer extends React.PureComponent<Props> {
	openMaps = () => {
		window.open('https://goo.gl/maps/wqdkTugYKiw9qZC19');
	};
	render() {
		return (
			<CeremonyDetails className={this.props.className} id={this.props.id}>
				<TitleImage src={Schedule} alt="Schedule" {...this.props} />
				<Details {...this.props}>
					<WatercolorStyle src={require('../../Content/Images/watercolor/rings.png')} alt="Ceremony" />
					<DetailsTitle {...this.props}>Ceremony</DetailsTitle>
					<DetailsText {...this.props}>September 10, 2022</DetailsText>
					<DetailsText {...this.props}>2:00 pm</DetailsText>
				</Details>
				<LineDiv />
				<Details>
					<WatercolorStyle src={require('../../Content/Images/watercolor/church.png')} alt="Ceremony" />
					<DetailsTitle {...this.props}>Cathedral of the Sacred Heart</DetailsTitle>
					<ScheduleAddress>
						<a href="https://goo.gl/maps/wqdkTugYKiw9qZC19" target="_blank" rel="noopener noreferrer">
							<SubDetailsText {...this.props}>823 Cathedral Place</SubDetailsText>
							<SubDetailsText {...this.props}>Richmond, Virginia</SubDetailsText>
						</a>
					</ScheduleAddress>
				</Details>
				<Spacer />
				<FancyLine src={LineDivider} {...this.props} />
				<Details {...this.props}>
					<WatercolorStyle src={require('../../Content/Images/watercolor/champagne.png')} alt="Reception" />
					<DetailsTitle {...this.props}>Reception</DetailsTitle>
					<DetailsText {...this.props}>September 10, 2022</DetailsText>
					<DetailsText {...this.props}>5:00 pm</DetailsText>
				</Details>
				<LineDiv />
				<Details>
					<WatercolorStyle src={require('../../Content/Images/watercolor/cake.png')} alt="Reception" />
					<DetailsTitle {...this.props}>The Jefferson Hotel</DetailsTitle>
					<ScheduleAddress>
						<a href="https://g.page/JeffersonHotel?share" target="_blank" rel="noopener noreferrer">
							<SubDetailsText {...this.props}>101 West Franklin Street</SubDetailsText>
							<SubDetailsText {...this.props}>Richmond, VA 23220</SubDetailsText>
						</a>
					</ScheduleAddress>
				</Details>
			</CeremonyDetails>
		);
	}
}

export default CeremonyContainer;
