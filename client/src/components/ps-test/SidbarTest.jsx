import React from 'react';
import { setFocusNo } from 'actions/progressContest';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useSelector, useDispatch } from 'react-redux';

function SidebarTest() {
	const { problemList } = useSelector((state) => state.contestProgress);
	const problemNum = problemList.length;

	const dispatch = useDispatch();

	function focusProblem(num) {
		return function () {
			dispatch(setFocusNo(num));
		};
	}
	return (
		<Sidebar style={siderbarStyle} width="90px">
			<Menu>
				{Array.from({ length: problemNum }, (_, index) => index + 1).map((num) => (
					<MenuItem key={num} onClick={focusProblem(num)}>{`문제 ${num}`}</MenuItem>
				))}
			</Menu>
		</Sidebar>
	);
}

export default SidebarTest;

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};
