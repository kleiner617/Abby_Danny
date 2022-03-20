import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from '@emotion/styled';

type Props = {};

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
							src={require('../../Content/Images/AD_Long_1.jpg')}
							alt="Abby and Danny at Virginia House"
							style={{
								width: '100%'
							}}
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_Long_2.jpg')}
							alt="Abby and Danny at Virginia House"
							style={{
								width: '100%'
							}}
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_Long_3.jpg')}
							alt="Abby and Danny at Virginia House"
							style={{
								width: '100%'
							}}
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_Long_4.jpg')}
							alt="Abby and Danny at Virginia House"
							style={{
								width: '100%'
							}}
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_Long_5.jpg')}
							alt="Abby and Danny at Virginia House"
							style={{
								width: '100%'
							}}
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_Long_6.jpg')}
							alt="Abby and Danny at Virginia House"
							style={{
								width: '100%'
							}}
						/>
					</Carousel.Item>

					<Carousel.Item>
						<img
							src={require('../../Content/Images/AD_Long_7.jpg')}
							alt="Abby and Danny at Virginia House"
							style={{
								width: '100%'
							}}
						/>
					</Carousel.Item>
				</Carousel>
			</PhotoHeaderStyle>
		);
	}
}

export default PhotoHeader;
