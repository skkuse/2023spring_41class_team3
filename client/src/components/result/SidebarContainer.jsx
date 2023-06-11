import React from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { setResultFocusNo, setResultFocusType } from 'actions/showResult';

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};

function SidebarContainer() {
	const dispatch = useDispatch();

	function setResult(num, type) {
		return function () {
			dispatch(setResultFocusNo(num));
			dispatch(setResultFocusType(type));
		};
	}

	const problemList = [1, 2, 3, 4, 5];

	return (
		<Sidebar style={siderbarStyle}>
			<Menu>
				{problemList.map((num) => (
					<SubMenu label={`Problem ${num}`}>
						<MenuItem onClick={setResult(num, 'readability')}> 가독성 </MenuItem>
						<MenuItem onClick={setResult(num, 'timeComplexity')}>시간 복잡도</MenuItem>
						<MenuItem onClick={setResult(num, 'improvement')}> 개선된 코드 </MenuItem>
					</SubMenu>
				))}
				<MenuItem onClick={setResult(0, 'analysis')}> 분석 </MenuItem>
				<MenuItem onClick={setResult(0, 'feedback')}> 피드백 </MenuItem>
			</Menu>
		</Sidebar>
	);
}

export default SidebarContainer;
