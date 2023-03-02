import React from 'react';
import s from './style.module.css';
import UserCard from '../UserCard';
import { labels } from './genderLabel';

export default function GenderCard({ label, users }) {
	return (
		<div className={s.wrapper}>
			<div className={s.label}>{labels[label]}</div>
			<div className={s.users}>
				{users.map((user) => (
					<UserCard key={user.id} {...user} />
				))}
			</div>
		</div>
	);
}
