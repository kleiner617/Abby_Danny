import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PhotoHeader from '../Components/desktop/photo-header-large';
import ScheduleContainer from './schedule-container';
import AccomodationsContainer from './accomodations_container';
import ThingsToDoContainer from './things-to-do-container';
import FAQContainer from './faq-container';
import RegistryContainer from './registry-container';
import StickyHeader from '../Components/desktop/sticky-header';
import Footer from '../Components/footer';
import ElegantHeader from '../Components/desktop/elegant-header';

const getDimensions = (ele: any) => {
	const { height } = ele.getBoundingClientRect();
	const offsetTop = ele.offsetTop;
	const offsetBottom = offsetTop + height;

	return {
		height,
		offsetTop,
		offsetBottom
	};
};

const scrollTo = (ele: any) => {
	ele.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
};

const HomeBlurb = styled('div')`
	font-size: 24px;
	width: 60%;
	margin: 100px auto;
`;

const Fillertonotmessupstickyheader = styled('div')`
	height: 75px;
`;

const HomeContainer = () => {
	const [visibleSection, setVisibleSection] = useState<any>();

	const headerRef = useRef(null);
	const scheduleRef = useRef(null);
	const faqRef = useRef(null);
	const accomdationsRef = useRef(null);
	const thingsToDoRef = useRef(null);
	const registryRef = useRef(null);

	const sectionRefs = [
		{ section: 'header', ref: headerRef },
		{ section: 'schedule', ref: scheduleRef },
		{ section: 'faq', ref: faqRef },
		{ section: 'accomodations', ref: accomdationsRef },
		{ section: 'thingsToDo', ref: thingsToDoRef },
		{ section: 'registry', ref: registryRef }
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 82.76;

			const selected = sectionRefs.find(({ section, ref }) => {
				const ele = ref.current;
				if (ele) {
					const { offsetBottom, offsetTop } = getDimensions(ele);
					return scrollPosition > offsetTop && scrollPosition < offsetBottom;
				}
			});

			if (selected && selected.section !== visibleSection) {
				setVisibleSection(selected.section);
			} else if (!selected && visibleSection) {
				setVisibleSection(undefined);
			}
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [visibleSection, sectionRefs]);

	const scrollToHome = () => {
		scrollTo(headerRef.current);
	};

	return (
		<div className="App">
			<div className="content">
				<div className="section" id="header" ref={headerRef}>
					<StickyHeader visibleSection={visibleSection} scrollToHome={scrollToHome} />
					<Fillertonotmessupstickyheader />
					<PhotoHeader />
					<HomeBlurb>
						Welcome! We are excited to celebrate with you on Saturday, September 10, 2022. We created this
						website as a convienent way to share all of the important details with you leading up to our
						wedding. You can also find things to do in the Richmond area and check out our registry.
					</HomeBlurb>
				</div>

				<div className="section" id="schedule" ref={scheduleRef}>
					<ScheduleContainer></ScheduleContainer>
				</div>
				<div className="section" id="accomodations" ref={accomdationsRef}>
					<AccomodationsContainer></AccomodationsContainer>
				</div>
				<div className="section" id="thingsToDo" ref={thingsToDoRef}>
					<ThingsToDoContainer></ThingsToDoContainer>
				</div>
				<div className="section" id="faq" ref={faqRef}>
					<FAQContainer />
				</div>
				<div className="section" id="registry" ref={registryRef}>
					<RegistryContainer></RegistryContainer>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default HomeContainer;
