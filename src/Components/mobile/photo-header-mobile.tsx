import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from '@emotion/styled';

type Props = {};
const photoMobileStyle = {
	height: '400px',
	width: '100%'
};

const PhotoHeaderStyle = styled.div`
	width: 80%;
	margin-right: auto;
	margin-left: auto;
`;

export class PhotoHeader extends React.PureComponent<Props> {
	render() {
		return (
			<PhotoHeaderStyle className="photo-header">
				<Carousel>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/EH_wedding_mobile_4.jpg')}
							alt="placeholder1"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/HPEK_mobile_1.jpg')}
							alt="placeholder1"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/EH_wedding_mobile_1.jpg')}
							alt="placeholder1"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/HPEK_mobile_2.jpg')}
							alt="placeholder1"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/EH_wedding_mobile_2.jpg')}
							alt="placeholder1"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/HPEK_mobile_3.jpg')}
							alt="placeholder1"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/EH_wedding_mobile_3.jpg')}
							alt="placeholder1"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
				</Carousel>
			</PhotoHeaderStyle>
		);
	}
}

export default PhotoHeader;
