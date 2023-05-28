import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const siderbarStyle = {
	border: '2px solid #b6c9d7',
	borderRadius: '5px',
};

function SidebarInterview() {
	const problemList = [1, 2, 3, 4, 5];

	return (
		<Sidebar style={siderbarStyle} width="200px">
			<Menu>
				{problemList.map((num) => (
					<MenuItem>{`Problem ${num}`}</MenuItem>
				))}
			</Menu>
		</Sidebar>
	);
}

export default SidebarInterview;
