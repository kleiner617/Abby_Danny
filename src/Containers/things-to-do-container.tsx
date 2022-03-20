import * as React from 'react';
import ThingsToDoMobile from '../Components/mobile/things-to-do-mobile';
import ThingsToDoFull from '../Components/desktop/things-to-do-full';

type ThingsToDoProps = {
	className?: string;
	id?: string;
	isMobile?: boolean;
};

const ThingsToDoContainer: React.FC<ThingsToDoProps> = (props: ThingsToDoProps) => {
	return props.isMobile ? <ThingsToDoMobile {...props} /> : <ThingsToDoFull {...props} />;
};

export default ThingsToDoContainer;
