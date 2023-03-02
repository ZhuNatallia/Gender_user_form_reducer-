import React from 'react';
import GenderCard from '../GenderCard';
import s from './style.module.css';

export default function UserContainer({ users }) {
	const result = [];

	users.forEach((user) => {
		//ищем добавлянмый гендер в итоговом массиве
		const gender = result.find((gender) => gender.gender_num === user.gender);
		//если нашли, тогда в итоговом массиве в найдкнный гендер добавляем текущего юзера
		if (gender !== undefined) {
			gender.users.push(user);
		} else {
			//если не нашли, тогда создаем новый блок с другим гендером
			result.push({
				gender_num: user.gender,
				users: [user],
			});
		}
	});
	return (
		<div className={s.container}>
			{result.map((gender) => (
				<GenderCard label={gender.gender_num} users={gender.users} />
			))}
		</div>
	);
}
