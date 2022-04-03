import * as React from 'react';
import styled from '@emotion/styled';
import FAQ from '../Content/Images/SectionHeaders/details.svg';
import LineDivider from '../Content/Images/lines.svg';

type Props = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const TitleImage = styled.img`
	height: ${(props: Props): string => (props.isMobile ? `12vh` : '150px')};
	margin-bottom: 40px;
`;

const HeartImage = styled.img`
	margin-top: 30px;
	margin-bottom: 30px;
	height: ${(props: Props): string => (props.isMobile ? `40px` : '70px')};
`;
const FAQDetails = styled('div')`
	padding: ${(props: Props): string => (props.isMobile ? `30px 0` : '40px 0')};
`;

const QuestionStyle = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? '20px' : '30px')};
	margin: 20px;
	width: ${(props: Props): string => (props.isMobile ? '85%' : '50%')};
	margin: auto;
	font-weight: bold;
	margin-bottom: 20px;
`;
const AnswerStyle = styled('div')`
	font-size: ${(props: Props): string => (props.isMobile ? '18px' : '24px')};
	margin: 20px;
	width: ${(props: Props): string => (props.isMobile ? '85%' : '40%')};
	margin: auto;
`;

const WatercolorStyle = styled.img`
	height: 150px;
	margin-bottom: 20px;
`;

export class FAQContainer extends React.PureComponent<Props> {
	openMaps = () => {
		window.open(
			'https://www.google.com/maps/dir/?api=1&destination=QVB&destination_place_id=ChIJ11lAdDEVsYkRUIzFDtlG9FU'
		);
	};
	render() {
		return (
			<FAQDetails className={this.props.className} id={this.props.id}>
				<TitleImage src={FAQ} alt="Details" />
				<QuestionStyle {...this.props}>
					Will there be transportation to and from the ceremony and reception?
				</QuestionStyle>
				<AnswerStyle {...this.props}>
					Transportation will not be provided between the ceremony and reception. For out of town guests
					staying at the Jefferson or the Graduate, the Cathedral is a 10 minute walk (0.4 miles). Richmond is
					also very accessible by Uber and Lyft. For guests driving themselves, there are several parking
					garages plus street parking near the Cathedral. Valet will also be available at the Jefferson
					beginning at 5pm.
				</AnswerStyle>
				<HeartImage src={LineDivider} {...this.props} />
				<QuestionStyle {...this.props}>
					What should we do in between the ceremony and the reception?
				</QuestionStyle>
				<AnswerStyle {...this.props}>
					Because the Cathedral will be holding Saturday evening mass, our ceremony ends at 3pm, leaving a two
					hour window before cocktail hour. Richmond has lots of fun restaurants and bars where you can get a
					quick snack or drink before joining us at 5pm. See our 'Things to Do' tab for more ideas!
				</AnswerStyle>
				<HeartImage src={LineDivider} {...this.props} />
				<QuestionStyle {...this.props}>What should I wear?</QuestionStyle>
				<AnswerStyle {...this.props}>The dress code for our wedding is Black-Tie Optional.</AnswerStyle>
			</FAQDetails>
		);
	}
}

// Green color to use....
// #6f9667

export default FAQContainer;
