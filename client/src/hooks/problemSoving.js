import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useRunTestCode = () => {
	const navigate = useNavigate();

	const runTestCode = async (body) => {
		const config = { 'Content-Type': 'application/json' };
		try {
			const res = await axios.post('/api/problem/test', body, config);
			return res.data;
			// const { code, run, caseResultList, message } = res.data;
		} catch (err) {
			const { status } = err.response;
			if (status === 401) {
				navigate('/');
			}
			return null;
		}
	};

	return runTestCode;
};

export default useRunTestCode;
