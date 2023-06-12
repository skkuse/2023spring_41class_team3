import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useInitCodingTest = (difficulty, number) => {
	const navigate = useNavigate();

	const initCodingTest = async () => {
		try {
			const data = { difficulty, number };
			const config = { 'Content-Type': 'application/json' };
			const res = await axios.post('api/coding-test/initiation', data, config);
			return res.data;
		} catch (err) {
			const { status } = err.response;
			if (status === 401) {
				navigate('/');
			}
			return null;
		}
	};
	return initCodingTest;
};

export const useTerminateCodingTest = () => {
	const navigate = useNavigate();

	const terminateCodingTest = async () => {
		try {
			const res = await axios.post('api/coding-test/termination');
			return res.data;
		} catch (err) {
			const { status } = err.response;
			if (status === 401) {
				navigate('/');
			}
			return null;
		}
	};
	return terminateCodingTest;
};
