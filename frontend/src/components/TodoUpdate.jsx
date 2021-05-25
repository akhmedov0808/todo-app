import React from 'react'
import { usePutRequest } from '../hooks/request'
import { TODO_DETAIL } from '../urls'
import TodoForm from './TodoForm'


export default function TodoUpdate({ item, onUpdate, setShowUpdate }) {
    const update = usePutRequest({ url: TODO_DETAIL.replace('{id}', item.id) })

    async function handleUpdate(data) {
        const {success} = await update.request({ data })
        onUpdate()
        if (success) setShowUpdate(false)
    }

    return (
        <TodoForm onSubmit={handleUpdate} initialValues={item} />
    )
}