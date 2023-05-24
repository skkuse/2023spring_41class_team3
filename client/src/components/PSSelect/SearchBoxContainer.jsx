import styled from 'styled-components';

import bgImage from 'assets/images/imagesource/PSSelectPage_background.png';
import searchbuttonImage from 'assets/images/imagesource/PSSelectPage_searchbuttonimage.png';

const Container = styled.div`
	justifycontent: center;
	alignitems: center;
`;

const Body = styled.div`
	margin: 0rem 7rem 0.2rem 7rem;
	width: cover;
	min-height: 30vh;
	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: relative;
`;

const Search = styled.div`
	position: absolute;
	bottom: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50%;
	text-align: center;
	input::-ms-input-placeholder {
		color: #a8a8a8;
	}
	input::-webkit-input-placeholder {
		color: #a8a8a8;
	}
	input::-moz-placeholder {
		color: #a8a8a8;
	}
`;

const Searchbox = styled.input.attrs({
	type: 'text',
	placeholder: 'search for your problem',
})`
	align-items: center;
	width: 50%;
	height: 3rem;
	border: none;
	border-radius: 15px;
	margin: 10px 10px;
	font-size: 1.3rem;
	text-align: center;
`;

const ButtonSearch = styled.button`
	align-items: center;
	height: 2rem;
	width: 2rem;
	margin: 5px;
	background-image: url(${searchbuttonImage});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-block;
`;

const Option = styled.div`
	position: absolute;
	top: 50%;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50%;
	text-align: center;
`;

function SearchBoxContainer() {
	return (
		<Container>
			<Body>
				<Search>
					<Searchbox />
					<ButtonSearch />
				</Search>
				<Option />
			</Body>
		</Container>
	);
}

export default SearchBoxContainer;
