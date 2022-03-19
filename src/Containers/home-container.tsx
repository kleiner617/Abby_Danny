// import * as React from "react";
import React, { useRef, useEffect, useState } from 'react';
// import MenuHeader from '../Components/desktop/menu-header';

// Schedule, travel, things to do, faq, registry
import PhotoHeader from '../Components/desktop/photo-header-large';
import ScheduleContainer from './schedule-container';
import TravelContainer from './travel-container';
import ThingsToDoContainer from './things-to-do-container';
import FAQContainer from './faq-container';
import RegistryContainer from './registry-container';
import StickyHeader from '../Components/desktop/sticky-header';
// import NameHeaderDesktop from '../Components/desktop/name-header-desktop';
import Footer from '../Components/footer';
import ElegantHeader from '../Components/desktop/elegant-header';

type Props = {};

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

const HomeContainer = () => {
	const [visibleSection, setVisibleSection] = useState<any>();

	const headerRef = useRef(null);
	const scheduleRef = useRef(null);
	const faqRef = useRef(null);
	const travelRef = useRef(null);
	const thingsToDoRef = useRef(null);
	const registryRef = useRef(null);

	const sectionRefs = [
		{ section: 'header', ref: headerRef },
		{ section: 'schedule', ref: scheduleRef },
		{ section: 'faq', ref: faqRef },
		{ section: 'travel', ref: travelRef },
		{ section: 'thingsToDo', ref: thingsToDoRef },
		{ section: 'registry', ref: registryRef }
	];

	useEffect(() => {
		console.log('this is the first use Effect', visibleSection);
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
				<ElegantHeader visibleSection={visibleSection} scrollToHome={scrollToHome} />
				<div className="section" id="header" ref={headerRef}>
					<PhotoHeader />
					<div style={{ height: '300px' }}>Temp Placeholder</div>
				</div>
				{/* <StickyHeader visibleSection={visibleSection} scrollToHome={scrollToHome} /> */}
				<div className="section" id="schedule" ref={scheduleRef}>
					<ScheduleContainer></ScheduleContainer>
				</div>
				<div className="section" id="travel" ref={travelRef}>
					<TravelContainer></TravelContainer>
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
