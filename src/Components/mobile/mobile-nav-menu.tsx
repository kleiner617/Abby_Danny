import * as React from 'react';
import styled from '@emotion/styled';
import { slide as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';

type PropsType = {
	scrollToHome?: any;
};

const styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		left: '20px',
		top: '20px'
	},
	bmBurgerBarsHover: {
		background: '#a90000'
	},
	bmBurgerBars: {
		background: '#373a47'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenu: {
		background: 'white',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em'
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100%',
		width: '100%',
		fontSize: '40px'
	},
	bmItemList: {
		fontSize: '28px',
		lineHeight: '60px',
		display: 'grid !important',
		gridTemplateRows: '1fr 1fr 1fr 1fr',
		top: '50%',
		left: '50%',
		paddingTop: '30%',
		justifyContent: 'center',
		textAlign: 'center'
	},
	bmItem: {
		fontSize: '28px',
		lineHeight: '60px'
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	},
	normalText: {
		color: '#4A4A4A',
		fontWeight: '300'
	}
};

const MonogramImage = styled('img')`
	height: 90px;
	width: 90px;
	margin-top: -10px;
	display: inline-block !important;
	margin-top: 75px;
`;

type StateType = {
	isOpen: boolean;
};

export class MobileNavMenu extends React.Component<PropsType, StateType> {
	constructor(props: PropsType) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	toggleMenu = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	onMenuItemClick = (selectedType: string) => {
		this.toggleMenu();
	};

	handleStateChange(state: StateType) {
		this.setState({ isOpen: state.isOpen });
	}

	render() {
		return (
			<Menu
				styles={styles}
				isOpen={this.state.isOpen}
				onStateChange={(state: StateType) => this.handleStateChange(state)}
				customBurgerIcon={
					<i className="material-icons" style={{ fontSize: '35px' }}>
						menu
					</i>
				}
			>
				<Link smooth to="/#schedule" activeClassName="active" onClick={this.toggleMenu}>
					Schedule
				</Link>
				<Link smooth to="/#travel" activeClassName="active" onClick={this.toggleMenu}>
					Travel
				</Link>

				<Link smooth to="/#accomodations" activeClassName="active" onClick={this.toggleMenu}>
					Accomodations
				</Link>

				<Link smooth to="/#thingsToDo" activeClassName="active" onClick={this.toggleMenu}>
					Things to Do
				</Link>

				<Link smooth to="/#faq" activeClassName="active" onClick={this.toggleMenu}>
					FAQ
				</Link>

				<Link to="/registry" activeClassName="active" onClick={this.toggleMenu}>
					Registry
				</Link>

				<Link smooth to="/" activeClassName="active" onClick={this.toggleMenu}>
					<MonogramImage
						src={require('../../Content/Images/A-D_navy.png')}
						onClick={this.props.scrollToHome}
					/>
				</Link>
			</Menu>
		);
	}
}

export default MobileNavMenu;
