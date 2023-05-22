import axios from 'axios';

const oauthLogin = async (oauthType) => {
	const response = await axios.get(`/auth/login/oauth?type=${oauthType}`);
	const { pageUrl } = response.data;
	window.location.href = pageUrl;
};

export default oauthLogin;
