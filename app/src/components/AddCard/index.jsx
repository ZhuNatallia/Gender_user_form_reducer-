import React from 'react';
import s from './style.module.css';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

export default function AddCard(/* { addNewUser } */) {

	const dispatch = useDispatch();

	const gender_options = [
		{ value: 1, label: 'Man' },
		{ value: 2, label: 'Woman' },
	];

	const onSubmit = (event) => {
		event.preventDefault();
		const { photo, name, gender } = event.target;

		dispatch({
			type: 'ADD',
			payload: {
				id: Date.now(),
				photo: photo.value,
				name: name.value,
				gender: gender.value,
			},
		});
		/* addNewUser(photo.value, name.value, gender.value);
		console.log(addNewUser); */
		name.value = '';
		photo.value = '';
		gender.value = '';
	};
	return (
		<form onSubmit={onSubmit} className={s.container}>
			<input
				type='text'
				placeholder='Ссылка на Ваше фото'
				name='photo' /* src={photo} */
			/>
			<input type='text' placeholder='Введите имя' name='name' />
			<Select placeholder='Ваш пол' name='gender' options={gender_options} />
			<button className={s.btn}>Добавить</button>
		</form>
	);
}
