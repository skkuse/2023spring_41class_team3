import React from 'react';
import { setInterviewFocusNo } from 'actions/progressInterview';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setFeedbackFocusNo } from 'actions/progressFeedback';

function SidebarInterview() {
	const { interviewProblems } = useSelector((state) => state.interviewProgress);

	const problemList = Array.from({ length: interviewProblems.length }, (_, index) => index + 1);

	const dispatch = useDispatch();

	function focusInterviewProblem(num) {
		return function () {
			dispatch(setInterviewFocusNo(num));
			dispatch(setFeedbackFocusNo(num));
		};
	}

	return (
		<Sidebar style={siderbarStyle} width="200px">
			<Menu>
				{problemList.map((num) => (
					<MenuItem
						key={num}
						onClick={focusInterviewProblem(num)}
					>{`Problem ${num}`}</MenuItem>
				))}
			</Menu>
		</Sidebar>
	);
}

export default SidebarInterview;

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};
