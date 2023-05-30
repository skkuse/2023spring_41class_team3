import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import PropTypes from 'prop-types';

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};

function SidebarTest({ numProblems, onSelectProblem }) {
	function handleProblemSelect(index) {
		onSelectProblem(index);
	}

	function CreateMenuItem(num) {
		const arr = [];

		for (let i = 0; i < num; i += 1) {
			arr.push(
				<MenuItem key={i} onClick={() => handleProblemSelect(i)}>
					{i + 1}번
				</MenuItem>
			);
		}

		return arr;
	}

	return (
		<Sidebar style={siderbarStyle} width="90px">
			<Menu>{CreateMenuItem(numProblems)}</Menu>
		</Sidebar>
	);
}

SidebarTest.propTypes = {
	numProblems: PropTypes.number.isRequired,
	onSelectProblem: PropTypes.func.isRequired,
};

export default SidebarTest;
