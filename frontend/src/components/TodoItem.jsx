import React, {useState} from 'react'
import { FaCheck, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { TODO_DETAIL } from '../urls'
import 'bulma/css/bulma.min.css'
import TodoUpdate from './TodoUpdate'
import { useDeleteRequest, usePutRequest } from '../hooks/request'
import cn from 'classnames'
import { css, StyleSheet } from 'aphrodite'

export default function TodoItem({ item, onUpdate, onDelete, onSuccess }) {
	const update = usePutRequest({ url: TODO_DETAIL.replace('{id}', item.id) });
    const remove = useDeleteRequest({ url: TODO_DETAIL.replace('{id}', item.id), });
    const [showUpdate, setShowUpdate] = useState(false)
    const [isActive, setIsActive] = useState(false)

    async function updateActive(data) {
        setIsActive(!isActive)
		await update.request({data: {
		    ...data, isActive: !isActive, title: item.title
            }, })
		onUpdate()
	}

	async function handleDelete() {
		if (global.confirm('Вы действительно хотите удалить?')) {
			await remove.request();
			onDelete();
		}
	}

	return (

		<div className='is-flex box'>

            <div className="media-content">
                {showUpdate ? (
                    <TodoUpdate item={item} onUpdate={onUpdate} setShowUpdate={setShowUpdate}/>
                ) : (
                    <span className={cn({ [css(styles.del)]: item.isActive })}>
                        <p className="title mt-2">{item.title}</p>
                    </span>
                )}
            </div>

            {item.isActive ? (
                <span className="has-text-success is-size-5 mr-4" onClick={() => updateActive()}>
                    <FaCheck/>
                </span>
            ) : (
                <span className="has-text-grey-lighter is-size-5 mr-4" onClick={() => updateActive()}>
                    <FaCheck/>
                </span>
            )}

            <FaPencilAlt onClick={() => setShowUpdate(!showUpdate)} className='has-text-primary mr-4 is-size-5'/>

            <FaTrashAlt onClick={handleDelete} className='has-text-danger is-size-4'/>

        </div>
	);
}

const styles = StyleSheet.create({
    del: {
        textDecoration: 'line-through red',
    },
})
