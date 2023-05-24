import devNaviLogo from '../../assets/images/logos/DevNavi-logo.png';

const headerStyle = {
	display: 'flex',
	textAlign: 'center',
	padding: '0 auto',
	background: '#FFFFFF',
};

const headerLogoStyle = {
	width: '80px',
	height: '80px',
	objectFit: 'contain',
	padding: '0 5px',
};

const Header2 = () => (
	<header style={headerStyle}>
		<img src={devNaviLogo} alt="devNavi logo" style={headerLogoStyle} />
	</header>
);

export default Header2;
