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

const HomeLinkStyle = styled('div')`
	margin: auto;
`;
const HeaderStyle = styled('div')`
	width: 45%;
	margin: auto;
`;

const StickyHeader = ({ visibleSection, scrollToHome }: Props) => {
	return (
		<div
			className={`sticky ${visibleSection === 'schedule' ||
				visibleSection === 'thingsToDo' ||
				visibleSection === 'accomodations' ||
				visibleSection === 'ourStory' ||
				visibleSection === 'details' ||
				visibleSection === 'registry'}`}
		>
			<div className="header">
				<HeaderStyle>
					<Link smooth to="/#schedule">
						<button
							type="button"
							className={`header_link ${visibleSection === 'schedule' ? 'selected' : ''}`}
						>
							Schedule
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
					<Link smooth to="/#schedule">
						<button
							type="button"
							className={`header_link ${visibleSection === 'schedule' ? 'selected' : ''}`}
						>
							Our Story
						</button>
					</Link>
				</HeaderStyle>
				<Link smooth to="/">
					<MonogramImage src={require('../../Content/Images/A-D_frenchBlue.png')} onClick={scrollToHome} />
				</Link>
				<HeaderStyle>
					<Link smooth to="/#thingsToDo">
						<button
							type="button"
							className={`header_link ${visibleSection === 'thingsToDo' ? 'selected' : ''}`}
						>
							Things To Do
						</button>
					</Link>
					<Link smooth to="/#details">
						<button
							type="button"
							className={`header_link ${visibleSection === 'details' ? 'selected' : ''}`}
						>
							Details
						</button>
					</Link>
					<Link smooth to="/#registry">
						<button
							type="button"
							className={`header_link ${visibleSection === 'registry' ? 'selected' : ''}`}
						>
							Registry
						</button>
					</Link>
				</HeaderStyle>
			</div>
		</div>
	);
};
export default StickyHeader;
