import React from 'react';
import s from './style.module.css';

export default function UserCard({ photo, name }) {
	return (
		<div className={s.card}>
			<img className={s.cardPhoto} src={photo} alt='avatar' />
			<p>{name}</p>
		</div>
	);
}
