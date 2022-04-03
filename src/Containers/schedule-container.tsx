import * as React from 'react';
import styled from '@emotion/styled';
import Schedule from '../Content/Images/SectionHeaders/schedule_header.svg';
import ScheduleMobile from '../Components/mobile/schedule-mobile';
import ScheduleFull from '../Components/desktop/schedule-full';

// export default CeremonyContainer;

type ScheduleProps = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};
const ScheduleContainer: React.FC<ScheduleProps> = (props: ScheduleProps) => {
	return props.isMobile ? <ScheduleMobile {...props} /> : <ScheduleFull {...props} />;
};

export default ScheduleContainer;
