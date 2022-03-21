import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from '@emotion/styled';

type Props = {};
const photoMobileStyle = {
	height: '500px',
	width: '100%'
};

const PhotoHeaderStyle = styled.div`
	width: 90%;
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
							src={require('../../Content/Images/AD_mobile_1.jpg')}
							alt="Abby and Danny engagement"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_mobile_2.jpg')}
							alt="Abby and Danny engagement"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_mobile_3.jpg')}
							alt="Abby and Danny engagement"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_mobile_4.jpg')}
							alt="Abby and Danny engagement"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_mobile_5.jpg')}
							alt="Abby and Danny engagement"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_mobile_6.jpg')}
							alt="Abby and Danny engagement"
							style={photoMobileStyle}
						/>
					</Carousel.Item>
				</Carousel>
			</PhotoHeaderStyle>
		);
	}
}

export default PhotoHeader;
