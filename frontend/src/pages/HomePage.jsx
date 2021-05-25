import React, { useState } from 'react'
import { TODO_LIST } from '../urls';
import { useLoad, usePostRequest } from '../hooks/request';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

export default function Home() {
	const todoCreate = usePostRequest({ url: TODO_LIST });
	const todos = useLoad({ url: TODO_LIST });
	const todo = todos.response || [];

	async function onSubmit(data, actions) {
		const { response } = await todoCreate.request({ data });
            // await todos.request()
		todos.setResponse([response, ...todos.response]);
		actions.resetForm();
	}

	return (
		<section key={todo.id} className='section-center'>
			<h3 className='has-text-centered mb-5 title is-size-3'><b>Список Заметки</b></h3>
			<TodoForm title='Добавить' onSubmit={onSubmit} />
			{todo.map((item) => (
				<TodoItem
					item={item}
					key={item.id}
					onUpdate={todos.request}
					onDelete={todos.request}
				/>
			))}
		</section>
	);
}
