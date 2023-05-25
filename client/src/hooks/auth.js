import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useOauthLogin = () => {
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

export default useOauthLogin;
