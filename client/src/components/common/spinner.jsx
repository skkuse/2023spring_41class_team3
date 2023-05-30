import PulseLoader from 'react-spinners/PulseLoader';

const override = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
};

function Spinner() {
	return (
		<PulseLoader
			color="#4d7bfb"
			margin="2"
			size="15"
			loading="true"
			speedMultiplier="1"
			cssOverride={override}
		/>
	);
}

export default Spinner;
