import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};

function SidebarTest() {
	const problemList = [1, 2, 3, 4, 5];

	return (
		<Sidebar style={siderbarStyle} width="90px">
			<Menu>
				{problemList.map((num) => (
					<MenuItem>{`문제 ${num}`}</MenuItem>
				))}
			</Menu>
		</Sidebar>
	);
}

export default SidebarTest;
