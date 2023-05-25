import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useOauthLogin = () => {
	const navigate = useNavigate();

	const oauthLogin = async (oauthType) => {
		try {
			const response = await axios.get(`/api/auth/login/oauth?type=${oauthType}`);
			const { pageUrl } = response.data;
			window.location.href = pageUrl;
		} catch (err) {
			const { status } = err.response;
			if (status === 401) {
				navigate('/');
			}
		}
	};

	return oauthLogin;
};

export const useAuthenticate = () => {
	const navigate = useNavigate();

	const authenticate = async () => {
		try {
			await axios.get('/api/auth/authentication');
			navigate('/main');
		} catch (err) {
			const { status } = err.response;
			if (status === 401) {
				navigate('/');
			}
		}
	};

	return authenticate;
};
