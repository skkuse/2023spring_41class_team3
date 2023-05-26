/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { setProblemNo, setResultType } from 'actions/setResults';

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};

function SidebarInterview() {
	const problemList = [1, 2, 3, 4, 5];

	return (
		<Sidebar style={siderbarStyle}>
			<Menu>
				{problemList.map((num) => (
					<MenuItem>{`Problem ${num}`}</MenuItem>
				))}
			</Menu>
		</Sidebar>
	);
}

export default SidebarInterview;
