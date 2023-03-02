import { useState } from 'react';

import AddCard from '../AddCard';
import UserContainer from '../UserContainer';

function App() {
	const [users, setUsers] = useState([]);

	/* 	const addNewUser = (photo, name, gender) => {
		setUsers([
			...users,
			{
				id: Date.now(),
				photo,
				name,
				gender,
			},
		]);
	}; */

	return (
		<div>
			<AddCard /* addNewUser={addNewUser} */ />
			<UserContainer users={users} />
		</div>
	);
}

export default App;
