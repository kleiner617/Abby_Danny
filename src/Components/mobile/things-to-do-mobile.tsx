import * as React from 'react';
import styled from '@emotion/styled';
import ThingsToDo from '../../Content/Images/SectionHeaders/things_to_do_header.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const TitleImage = styled.img`
	height: 11vh;
	margin-bottom: 20px;
`;

const ThingsToDoContainerStyle = styled('div')`
	padding: 80px 0;
`;

const CircleImage = styled('img')`
	margin-top: 30px;
	border-radius: 50%;
	height: 30vw;
	width: 30vw;
`;

const ImageHolder = styled('div')`
	margin-bottom: 25px;
`;

const OptionsContainer = styled('p')``;

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
	font-size: 20px;
	margin-bottom: 20px;
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

const AddressText = styled('div')``;

const OptionDetails = styled('p')`
	font-size: 2.5vh;
	margin: 0;
	padding-bottom: 20px;
	width: 85%;
	margin-right: auto;
	margin-left: auto;
`;

const LineDiv = styled('div')`
	border: solid 0.5px grey;
	width: 80%;
	height: 1px;
	margin: auto;
`;

export class ThingsToDoContainer extends React.PureComponent<Props> {
	render() {
		return (
			<ThingsToDoContainerStyle className={this.props.className} id={this.props.id}>
				<TitleImage src={ThingsToDo} alt="ThingsToDo" />
				<OptionsContainer>
					<OptionStyle>
						<ImageHolder>
							<CircleImage
								src={require('../../Content/Images/things_to_do/vmfa_circle.jpeg')}
								{...this.props}
							/>
						</ImageHolder>
						<OptionTitle>
							<a href={'http://vmfa.museum/'} target="_blank" rel="noopener noreferrer">
								Virginia Museum of Fine Arts
							</a>
						</OptionTitle>
						<OptionAddress>
							<a href="https://goo.gl/maps/xcJTeDUUZLaFCwsQ7" target="_blank" rel="noopener noreferrer">
								<AddressText>200 North Arthur Ashe Boulevard</AddressText>
								<AddressText>Richmond, VA 23220 </AddressText>
							</a>
						</OptionAddress>
						<OptionDetails>
							The Virginia Museum of Fine Arts (free admission) is one of the largest comprehensive art
							museums in the United States. It's also a great place to grab a drink - they offer happy
							hour in their sculpture garden!
						</OptionDetails>
					</OptionStyle>

					<LineDiv />

					<OptionStyle>
						<ImageHolder>
							<CircleImage
								src={require('../../Content/Images/things_to_do/pipeline_circle.jpg')}
								{...this.props}
							/>
						</ImageHolder>
						<OptionTitle>
							<a
								href={'https://www.visitrichmondva.com/things-to-do/outdoors/james-river/'}
								target="_blank"
								rel="noopener noreferrer"
							>
								Belle Isle and the Pipeline Walkway
							</a>
						</OptionTitle>
						<OptionAddress>
							<a href="https://goo.gl/maps/NHotf2vZkS9cpNSt8" target="_blank" rel="noopener noreferrer">
								<AddressText>Tredegar St</AddressText>
								<AddressText>Richmond, VA 23219</AddressText>
							</a>
						</OptionAddress>
						<OptionDetails>
							Belle Isle and the James River Pipeline walkway are two unique ways to experience the river
							and see some nature in the middle of downtown. They offer wooded trails and great views of
							the Class III rapids that are popular with rafters and kayakers.
						</OptionDetails>
					</OptionStyle>
					<LineDiv />
					<OptionStyle>
						<ImageHolder>
							<CircleImage
								src={require('../../Content/Images/things_to_do/beer_circle.jpeg')}
								{...this.props}
							/>
						</ImageHolder>
						<OptionTitle>
							<a
								href={'https://www.visitrichmondva.com/drink/richmond-beer-trail/'}
								target="_blank"
								rel="noopener noreferrer"
							>
								Richmond Beer Trail
							</a>
						</OptionTitle>
						<OptionAddress>
							<a
								href="https://g.page/ardent-craft-ales-rva?share"
								target="_blank"
								rel="noopener noreferrer"
							>
								{' '}
								<AddressText>Scotts Addition Historic District</AddressText>
								<AddressText>Richmond, VA 23230</AddressText>
							</a>
						</OptionAddress>
						<OptionDetails>
							Richmond is home to more than 30 craft breweries, distilleries and cideries. A few of our
							favorites include Hardywood, Ardent Craft Ales, and Blue Bee Cider.
						</OptionDetails>
					</OptionStyle>

					<LineDiv />

					<OptionStyle>
						<ImageHolder>
							<CircleImage
								src={require('../../Content/Images/things_to_do/carytown_circle.jpeg')}
								{...this.props}
							/>
						</ImageHolder>
						<OptionTitle>
							<a href={'https://www.carytownrva.com/'} target="_blank" rel="noopener noreferrer">
								{' '}
								Carytown
							</a>
						</OptionTitle>
						<OptionAddress>
							<a href="https://goo.gl/maps/Ys6JmEYACmV8gYNZ6" target="_blank" rel="noopener noreferrer">
								{' '}
								<AddressText>Richmond, VA 23221</AddressText>
							</a>
						</OptionAddress>
						<OptionDetails>
							Carytown is a unique shopping, dining, and entertainment neighborhood with a focus on
							locally-owned businesses. A few of our favorite spots include Can Can Brasserie, For the
							Love of Chocolate, and Creme de la Creme.
						</OptionDetails>
					</OptionStyle>
				</OptionsContainer>
			</ThingsToDoContainerStyle>
		);
	}
}

export default ThingsToDoContainer;
