import devNaviLogo from "../../assets/images/DevNavi-logo.png";

const headerStyle = {
    display: "flex",
    textAlign: "center",
    padding: "0 auto",
}

const headerLogoStyle = {
    width: '100px', 
    height: '100px', 
    objectFit: 'contain',
    padding: "0 10px",
}

const Header = () => {
    return (
        <header style={headerStyle}>
            <img src={devNaviLogo} alt="devNavi logo" style={headerLogoStyle}/>
        </header>
    )
}

export default Header

