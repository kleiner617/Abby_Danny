import React, { useRef, useEffect, useState } from 'react';
import PhotoHeader from '../Components/mobile/photo-header-mobile';
import ThingsToDoContainer from './things-to-do-container';
import RegistryContainer from './registry-container';
import ScheduleContainer from './schedule-container';
import MobileNavMenu from '../Components/mobile/mobile-nav-menu';
// import TravelContainer from './travel-container';
import AccomodationsContainer from './accomodations_container';
import FAQContainer from './faq-container';
import Footer from '../Components/footer';
import ElegantHeader from '../Components/mobile/mobile-elegant-header';

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

const MobileContainer = () => {
	const [visibleSection, setVisibleSection] = useState<any>();

	const headerRef = useRef(null);
	const scheduleRef = useRef(null);
	const covidRef = useRef(null);
	const accomodationRef = useRef(null);
	const thingsToDoRef = useRef(null);
	const registryRef = useRef(null);

	const sectionRefs = [
		{ section: 'header', ref: headerRef },
		{ section: 'schedule', ref: scheduleRef },
		{ section: 'faq', ref: covidRef },
		{ section: 'thingsToDo', ref: thingsToDoRef },
		{ section: 'accomodation', ref: accomodationRef },
		{ section: 'registry', ref: registryRef }
	];

	useEffect(() => {
		const handleScroll = () => {
			const { height: headerHeight } = getDimensions(headerRef.current);
			const scrollPosition = window.scrollY + headerHeight;

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

	const scrollToHome = (ref: any) => {
		scrollTo(headerRef.current);
	};

	return (
		<div className="App">
			<MobileNavMenu scrollToHome={scrollToHome} />
			<div className="mobile-header" ref={headerRef}>
				<ElegantHeader />
				<PhotoHeader />
			</div>

			<div className="content">
				<div className="section" id="schedule" ref={scheduleRef}>
					<ScheduleContainer isMobile={true}></ScheduleContainer>
				</div>
				<div className="section" id="accomodations" ref={accomodationRef}>
					<AccomodationsContainer isMobile={true}></AccomodationsContainer>
				</div>
				<div className="section" id="thingsToDo" ref={thingsToDoRef}>
					<ThingsToDoContainer isMobile={true}></ThingsToDoContainer>
				</div>

				<div className="section" id="faq" ref={covidRef}>
					<FAQContainer isMobile={true}></FAQContainer>
				</div>

				<div className="section" id="registry" ref={registryRef}>
					<RegistryContainer isMobile={true}></RegistryContainer>
				</div>
			</div>
			<Footer isMobile={true}></Footer>
		</div>
	);
};

export default MobileContainer;
