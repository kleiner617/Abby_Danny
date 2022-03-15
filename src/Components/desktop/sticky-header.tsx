import React from 'react';
import styled from '@emotion/styled';
import { HashLink as Link } from 'react-router-hash-link';
type Props = {
	visibleSection: string;
	scrollToHome?: any;
};

const HeartImg = styled('img')`
	height: 64px;
	width: 64px;
	margin-top: -10px;
`;

// French Blue: #0072bb
// Navy: #000080

const StickyHeader = ({ visibleSection, scrollToHome }: Props) => {
	return (
		<div
			className={`sticky ${
				visibleSection === 'ceremony' ||
				visibleSection === 'faq' ||
				visibleSection === 'getting-there' ||
				visibleSection === 'details' ||
				visibleSection === 'registry' ||
				visibleSection === 'rsvp'
					? 'show'
					: 'hide'
			}`}
		>
			<div className="header">
				<Link smooth to="/#schedule">
					<button type="button" className={`header_link ${visibleSection === 'ceremony' ? 'selected' : ''}`}>
						Schedule
					</button>
				</Link>

				<Link smooth to="/#travel">
					<button type="button" className={`header_link ${visibleSection === 'faq' ? 'selected' : ''}`}>
						Travel
					</button>
				</Link>

				<Link smooth to="/#accomodations">
					<button
						type="button"
						className={`header_link ${visibleSection === 'getting-there' ? 'selected' : ''}`}
					>
						Accomodations
					</button>
				</Link>

				<Link smooth to="/">
					<HeartImg
						src={require('../../Content/Images/A-D_frenchBlue.png')}
						onClick={scrollToHome}
					></HeartImg>
				</Link>

				<Link smooth to="/#thingsToDo">
					<button type="button" className={`header_link ${visibleSection === 'details' ? 'selected' : ''}`}>
						Things To Do
					</button>
				</Link>
				<Link smooth to="/#faq">
					<button type="button" className={`header_link ${visibleSection === 'registry' ? 'selected' : ''}`}>
						FAQ
					</button>
				</Link>
				<Link smooth to="/#registry">
					<button type="button" className={`header_link ${visibleSection === 'registry' ? 'selected' : ''}`}>
						Registry
					</button>
				</Link>

				<Link className="header_link" to={`/rsvp`}>
					{' '}
					RSVP{' '}
				</Link>
			</div>
		</div>
	);
};
export default StickyHeader;
