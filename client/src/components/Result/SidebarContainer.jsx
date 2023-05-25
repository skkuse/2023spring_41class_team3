import React from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { setProblemNo, setResultType } from 'actions/setResults';

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};

function SidebarContainer() {
	const dispatch = useDispatch();

	function setResult(num, type) {
		return function () {
			dispatch(setProblemNo(num));
			dispatch(setResultType(type));
		};
	}

	return (
		<Sidebar style={siderbarStyle}>
			<Menu>
				<SubMenu label="Problem 1">
					<MenuItem onClick={setResult(1, 'readability')}> 가독성 </MenuItem>
					<MenuItem onClick={setResult(1, 'timeComplexity')}> 시간 복잡도 </MenuItem>
					<MenuItem onClick={setResult(1, 'improvement')}> 개선된 코드 </MenuItem>
				</SubMenu>
				<SubMenu label="Problem 2">
					<MenuItem onClick={setResult(2, 'readability')}> 가독성 </MenuItem>
					<MenuItem onClick={setResult(2, 'timeComplexity')}> 시간 복잡도 </MenuItem>
					<MenuItem onClick={setResult(2, 'improvement')}> 개선된 코드 </MenuItem>
				</SubMenu>
				<SubMenu label="Problem 3">
					<MenuItem onClick={setResult(3, 'readability')}> 가독성 </MenuItem>
					<MenuItem onClick={setResult(3, 'timeComplexity')}> 시간 복잡도 </MenuItem>
					<MenuItem onClick={setResult(3, 'improvement')}> 개선된 코드 </MenuItem>
				</SubMenu>
				<SubMenu label="Problem 4">
					<MenuItem onClick={setResult(4, 'readability')}> 가독성 </MenuItem>
					<MenuItem onClick={setResult(4, 'timeComplexity')}> 시간 복잡도 </MenuItem>
					<MenuItem onClick={setResult(4, 'improvement')}> 개선된 코드 </MenuItem>
				</SubMenu>
				<SubMenu label="Problem 5">
					<MenuItem onClick={setResult(5, 'readability')}> 가독성 </MenuItem>
					<MenuItem onClick={setResult(5, 'timeComplexity')}> 시간 복잡도 </MenuItem>
					<MenuItem onClick={setResult(5, 'improvement')}> 개선된 코드 </MenuItem>
				</SubMenu>
				<MenuItem onClick={setResult(0, 'analysis')}> 분석 </MenuItem>
				<MenuItem onClick={setResult(0, 'feedback')}> 피드백 </MenuItem>
			</Menu>
		</Sidebar>
	);
}

export default SidebarContainer;
