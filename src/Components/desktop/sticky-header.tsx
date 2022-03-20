import React from 'react';
import styled from '@emotion/styled';
import { HashLink as Link } from 'react-router-hash-link';
type Props = {
	visibleSection: string;
	scrollToHome?: any;
};

const MonogramImage = styled('img')`
	height: 85px;
	width: 85px;
	margin-top: 2px;
	margin-bottom: 4px;
`;

// French Blue: #0072bb
// Navy: #000080

const StickyHeader = ({ visibleSection, scrollToHome }: Props) => {
	return (
		<div
			className={`sticky ${visibleSection === 'schedule' ||
				visibleSection === 'travel' ||
				visibleSection === 'things-to-do' ||
				visibleSection === 'faq' ||
				visibleSection === 'registry'}`}
		>
			<div className="header">
				<Link smooth to="/#schedule">
					<button type="button" className={`header_link ${visibleSection === 'schedule' ? 'selected' : ''}`}>
						Schedule
					</button>
				</Link>

				<Link smooth to="/#travel">
					<button type="button" className={`header_link ${visibleSection === 'travel' ? 'selected' : ''}`}>
						Travel
					</button>
				</Link>

				<Link smooth to="/#accomodations">
					<button
						type="button"
						className={`header_link ${visibleSection === 'accomodations' ? 'selected' : ''}`}
					>
						Accomodations
					</button>
				</Link>

				<Link smooth to="/">
					<MonogramImage src={require('../../Content/Images/A-D_frenchBlue.png')} onClick={scrollToHome} />
				</Link>

				<Link smooth to="/#thingsToDo">
					<button
						type="button"
						className={`header_link ${visibleSection === 'thingsToDo' ? 'selected' : ''}`}
					>
						Things To Do
					</button>
				</Link>
				<Link smooth to="/#faq">
					<button type="button" className={`header_link ${visibleSection === 'faq' ? 'selected' : ''}`}>
						FAQ
					</button>
				</Link>
				<Link smooth to="/#registry">
					<button type="button" className={`header_link ${visibleSection === 'registry' ? 'selected' : ''}`}>
						Registry
					</button>
				</Link>
			</div>
		</div>
	);
};
export default StickyHeader;
