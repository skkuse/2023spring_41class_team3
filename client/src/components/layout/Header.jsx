import devNaviLogo from '../../assets/images/logos/DevNavi-logo.png';

const headerStyle = {
	display: 'flex',
	textAlign: 'center',
	padding: '0 auto',
};

const headerLogoStyle = {
	width: '110px',
	height: '110px',
	objectFit: 'contain',
	padding: '0 5px',
};

const Header = () => (
	<header style={headerStyle}>
		<img src={devNaviLogo} alt="devNavi logo" style={headerLogoStyle} />
	</header>
);

export default Header;
